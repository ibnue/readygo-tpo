package com.readygo.tpo.weather.application;

import com.readygo.tpo.user.domain.User;
import com.readygo.tpo.weather.ApiKey;
import com.readygo.tpo.weather.domain.RainType;
import com.readygo.tpo.weather.domain.SkyType;
import com.readygo.tpo.weather.dto.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@Transactional
public class WeatherService {

    private final ApiKey API_KEY;
    private final String BASE_URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
    private final WebClient webClient;
    private final LocalDateTime now = LocalDateTime.now();

    public WeatherService(ApiKey apiKey, WebClient.Builder webClientBuilder) {
        this.API_KEY = apiKey;

        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory(BASE_URL);
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);

        this.webClient = webClientBuilder
                .uriBuilderFactory(factory)
                .baseUrl(BASE_URL)
                .build();
    }

    public WeatherResponse getWeather(User user, double lat, double lon) throws ParseException {
        BaseDateTime baseDateTime = getBaseDateTime();
        Grid grid = changeGpsToGrid(lat, lon);

        String result = webClient.get()
                .uri(uriBuilder -> uriBuilder.path("/getVilageFcst")
                        .queryParam("serviceKey", API_KEY.getKey())
                        .queryParam("numOfRows", 1000)
                        .queryParam("pageNo", 1)
                        .queryParam("dataType", "JSON")
                        .queryParam("base_date", baseDateTime.getDate())
                        .queryParam("base_time", baseDateTime.getTime())
                        .queryParam("nx", grid.getNx())
                        .queryParam("ny", grid.getNy()).build())
                .retrieve().bodyToMono(String.class).block();

        JSONParser parser = new JSONParser();
        JSONObject jsonObj = (JSONObject) parser.parse(result);

        JSONObject response = (JSONObject) jsonObj.get("response");
        JSONObject body = (JSONObject) response.get("body");
        JSONObject items = (JSONObject) body.get("items");
        JSONArray item = (JSONArray) items.get("item");

        JSONObject object;
        String category;
        LocalDate fcstDate;
        int fcstTime;
        int fcstValue;

        HourlyFcst current = new HourlyFcst(now.getHour());
        DailyFcst today = new DailyFcst(
                now.toLocalDate(),
                new HourTmp(Integer.MAX_VALUE, Integer.MAX_VALUE),
                new HourTmp(Integer.MIN_VALUE, Integer.MIN_VALUE));

        DailyFcst tomorrow = new DailyFcst(
                now.plusDays(1).toLocalDate(),
                new HourTmp(Integer.MAX_VALUE, Integer.MAX_VALUE),
                new HourTmp(Integer.MIN_VALUE, Integer.MIN_VALUE));

        for(int i = 0; i < item.size(); i++) {
            object = (JSONObject) item.get(i);
            category = (String) object.get("category");
            fcstDate = LocalDate.parse((String) object.get("fcstDate"), DateTimeFormatter.BASIC_ISO_DATE);
            fcstTime = Integer.parseInt(object.get("fcstTime").toString().substring(0, 2));

            if(fcstDate.isEqual(today.getDate()) && fcstTime == current.getHour()) {
                switch (category) {
                    case "TMP":
                        fcstValue = Integer.parseInt((String) object.get("fcstValue"));
                        current.setTmp(fcstValue);
                        break;
                    case "REH":
                        fcstValue = Integer.parseInt((String) object.get("fcstValue"));
                        current.setHumidity(fcstValue);
                        break;
                    case "SKY":
                        fcstValue = Integer.parseInt((String) object.get("fcstValue"));
                        current.setSkyType(SkyType.findByCode(fcstValue));
                        break;
                    case "PTY":
                        fcstValue = Integer.parseInt((String) object.get("fcstValue"));
                        current.setRainType(RainType.findByCode(fcstValue));
                        break;
                }
            }

            if(fcstDate.isEqual(today.getDate()) && category.equals("TMP")) {
                if(fcstTime >= user.getStartHour() && fcstTime <= user.getEndHour()) {
                    fcstValue = Integer.parseInt((String) object.get("fcstValue"));
                    if(fcstValue < today.getLocalMin().getTmp()) {
                        today.getLocalMin().setTmp(fcstValue);
                        today.getLocalMin().setHour(fcstTime);
                    }
                    if(fcstValue > today.getLocalMax().getTmp()) {
                        today.getLocalMax().setTmp(fcstValue);
                        today.getLocalMax().setHour(fcstTime);
                    }
                }
            }

            if(fcstDate.isEqual(tomorrow.getDate()) && category.equals("TMP")) {
                if(fcstTime >= user.getStartHour() && fcstTime <= user.getEndHour()) {
                    fcstValue = Integer.parseInt((String) object.get("fcstValue"));
                    if(fcstValue < tomorrow.getLocalMin().getTmp()) {
                        tomorrow.getLocalMin().setTmp(fcstValue);
                        tomorrow.getLocalMin().setHour(fcstTime);
                    }
                    if(fcstValue > tomorrow.getLocalMax().getTmp()) {
                        tomorrow.getLocalMax().setTmp(fcstValue);
                        tomorrow.getLocalMax().setHour(fcstTime);
                    }
                }
            }
        }

        System.out.println("current = " + current);
        System.out.println("today = " + today);
        System.out.println("tomorrow = " + tomorrow);

        return WeatherResponse.builder()
                .baseDate(LocalDate.parse(baseDateTime.date, DateTimeFormatter.BASIC_ISO_DATE))
                .baseTime(Integer.parseInt(baseDateTime.time.substring(0, 2)))
                .nx(grid.nx)
                .ny(grid.ny)
                .current(current)
                .today(today)
                .tomorrow(tomorrow)
                .build();
    }

    private BaseDateTime getBaseDateTime() {
        String date = now.format(DateTimeFormatter.BASIC_ISO_DATE);
        String time = "0500";

        int hr = now.getHour();
        if(hr <= 6) {
            date = now.minusDays(1).format(DateTimeFormatter.BASIC_ISO_DATE);
            time = "2300";
        }

        return new BaseDateTime(date, time);
    }

    private Grid changeGpsToGrid(double lat, double lon) {
        double RE = 6371.00877; // 지구 반경(km)
        double GRID = 5.0; // 격자 간격(km)
        double SLAT1 = 30.0; // 투영 위도1(degree)
        double SLAT2 = 60.0; // 투영 위도2(degree)
        double OLON = 126.0; // 기준점 경도(degree)
        double OLAT = 38.0; // 기준점 위도(degree)
        double XO = 43; // 기준점 X좌표(GRID)
        double YO = 136; // 기1준점 Y좌표(GRID)
        double DEGRAD = Math.PI / 180.0;
        double re = RE / GRID;
        double slat1 = SLAT1 * DEGRAD;
        double slat2 = SLAT2 * DEGRAD;
        double olon = OLON * DEGRAD;
        double olat = OLAT * DEGRAD;

        double sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
        double sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
        double ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
        ro = re * sf / Math.pow(ro, sn);
        double ra = Math.tan(Math.PI * 0.25 + (lat) * DEGRAD * 0.5);
        ra = re * sf / Math.pow(ra, sn);
        double theta = lon * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        int nx = (int) Math.floor(ra * Math.sin(theta) + XO + 0.5);
        int ny = (int) Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

        return new Grid(nx, ny);
    }

    @Getter
    @RequiredArgsConstructor
    static class Grid {
        private final int nx;
        private final int ny;
    }

    @Getter
    @RequiredArgsConstructor
    static class BaseDateTime {
        private final String date;
        private final String time;
    }
}
