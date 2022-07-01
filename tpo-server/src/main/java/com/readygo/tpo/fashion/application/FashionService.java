package com.readygo.tpo.fashion.application;

import com.readygo.tpo.fashion.dto.FashionImage;
import com.readygo.tpo.fashion.dto.FashionResponse;
import com.readygo.tpo.fashion.dto.WeatherFashion;
import com.readygo.tpo.user.domain.StyleCategory;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StreamUtils;

import javax.annotation.PostConstruct;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
@Transactional
public class FashionService {

    String[] weatherLabel = {"1_초고온", "2_고온", "3_약고온", "4_적정온도", "5_적정온도", "6_약저온", "7_저온", "8_초저온"};
    JSONObject data;

    @PostConstruct
    public void initialize() throws IOException, ParseException {
        JSONParser parser = new JSONParser();
        List<JSONObject> jsonFiles = new ArrayList<>();
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource[] resources = resolver.getResources("fashion/json/*.json");

        for(Resource resource : resources) {
            String s = StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
            JSONObject jsonObj = (JSONObject) parser.parse(s);
            jsonFiles.add(jsonObj);
        }

       data = new JSONObject();
        for(String w : weatherLabel) {
            JSONObject obj = new JSONObject();
            for(StyleCategory s : StyleCategory.values()) {
                obj.put(s.getValue(), new JSONArray());
            }
            data.put(w, obj);
        }

        for(JSONObject file : jsonFiles) {
            JSONObject dataset = (JSONObject) file.get("데이터셋 정보");
            JSONObject description = (JSONObject) dataset.get("데이터셋 상세설명");
            int fileNum = (Integer) dataset.get("파일 번호");

            JSONObject labeling = (JSONObject) description.get("라벨링");
            JSONObject style = (JSONObject) ((JSONArray) labeling.get("스타일")).get(0);

            String mainStyle = (String) style.get("스타일");
            String subStyle = (String) style.get("서브스타일");

            JSONObject outer = (JSONObject) ((JSONArray) labeling.get("아우터")).get(0);
            JSONObject onepiece = (JSONObject) ((JSONArray) labeling.get("원피스")).get(0);
            JSONObject top = (JSONObject) ((JSONArray) labeling.get("상의")).get(0);

            List<String> labels = new ArrayList<>();
            boolean hasOuter = false;

            if(outer != null && !outer.isEmpty()) {
                hasOuter = true;
                 JSONArray outerLabels = (JSONArray) outer.get("날씨");
                 for(Object o : outerLabels) {
                     String label = (String) o;
                     if(!labels.contains(label)) {
                         labels.add(label);
                     }
                 }
            }

            if(onepiece != null && !onepiece.isEmpty()) {
                JSONArray onepieceLabels = (JSONArray) onepiece.get("날씨");
                for(Object o : onepieceLabels) {
                    String label = (String) o;
                    if(!labels.contains(label)) {
                        labels.add(label);
                    }
                }
            }

            if(top != null && !top.isEmpty()) {
                JSONArray topLabels = (JSONArray) top.get("날씨");
                for(Object o : topLabels) {
                    String label = (String) o;
                    if(!labels.contains(label)) {
                        labels.add(label);
                    }
                }
            }

            for(String label : labels) {
                JSONObject obj = (JSONObject) data.get(label);
                JSONArray main = (JSONArray) obj.get(mainStyle);
                JSONArray sub = (JSONArray) obj.get(subStyle);

                JSONObject fileObj = new JSONObject();
                fileObj.put("fileNum", fileNum);
                fileObj.put("hasOuter", hasOuter);

                main.add(fileObj);
                sub.add(fileObj);
            }
        }
    }

    public FashionResponse recommendFashion(List<StyleCategory> style, int min, int max) {
        ClassPathResource resource = new ClassPathResource("classpath:resources");
        String CLASS_PATH = resource.getPath();

        String maxLabel = getWeatherLabel(max);
        String minLabel = getWeatherLabel(min);

        JSONObject maxObj = (JSONObject) data.get(maxLabel);
        JSONObject minObj = (JSONObject) data.get(minLabel);

        JSONArray maxArr = null;
        JSONArray minArr = null;

        Random rd = new Random();
        List<FashionImage> maxImages = new ArrayList<>();
        List<FashionImage> minImages = new ArrayList<>();

        for(StyleCategory s : style) {
            maxArr = (JSONArray) maxObj.get(s.getValue());
            minArr = (JSONArray) minObj.get(s.getValue());

            for(int i = 0; i < 10; i++) {
                int r = rd.nextInt(maxArr.size());
                JSONObject obj = (JSONObject) maxArr.get(r);
                int fileNum = (Integer) obj.get("fileNum");
                boolean hasOuter = (Boolean) obj.get("hasOuter");
                String url = CLASS_PATH + fileNum + ".jpg";
                FashionImage image = new FashionImage(s, hasOuter, url);
                maxImages.add(image);
            }

            for(int i = 0; i < 10; i++) {
                int r = rd.nextInt(minArr.size());
                JSONObject obj = (JSONObject) minArr.get(r);
                int fileNum = (Integer) obj.get("fileNum");
                boolean hasOuter = (Boolean) obj.get("hasOuter");
                String url = CLASS_PATH + fileNum + ".jpg";
                FashionImage image = new FashionImage(s, hasOuter, url);
                minImages.add(image);
            }
        }

        return FashionResponse.builder()
                .maxTmp(new WeatherFashion(maxLabel, maxImages))
                .minTmp(new WeatherFashion(minLabel, minImages))
                .build();
    }

    private String getWeatherLabel(int tmp) {
        String label = "";

        if(tmp > 27) {
            label = weatherLabel[0];
        } else if(tmp > 22) {
            label = weatherLabel[1];
        } else if(tmp > 19) {
            label = weatherLabel[2];
        } else if(tmp > 16) {
            label = weatherLabel[3];
        } else if(tmp > 11) {
            label = weatherLabel[4];
        } else if(tmp > 8) {
            label = weatherLabel[5];
        } else if(tmp > 4) {
            label = weatherLabel[6];
        } else {
            label = weatherLabel[7];
        }

        return label;
    }
}
