package com.readygo.tpo.weather.api;

import com.readygo.tpo.common.ApiResponse;
import com.readygo.tpo.common.ResponseMessage;
import com.readygo.tpo.config.security.CurrentUser;
import com.readygo.tpo.user.domain.User;
import com.readygo.tpo.weather.application.WeatherService;
import com.readygo.tpo.weather.dto.WeatherResponse;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/weather")
public class WeatherApiController {

    private final WeatherService weatherService;

    @GetMapping
    public ApiResponse<WeatherResponse> getWeather(@CurrentUser User user, @RequestParam double lat, @RequestParam double lon) throws ParseException {
        WeatherResponse weatherResponse = weatherService.getWeather(user, lat, lon);
        return ApiResponse.res(ResponseMessage.LOOKUP_WEATHER, weatherResponse);
    }
}
