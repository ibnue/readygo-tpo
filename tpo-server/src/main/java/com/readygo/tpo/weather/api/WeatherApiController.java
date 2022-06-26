package com.readygo.tpo.weather.api;

import com.readygo.tpo.config.security.CurrentUser;
import com.readygo.tpo.user.domain.User;
import com.readygo.tpo.weather.application.WeatherService;
import com.readygo.tpo.weather.dto.WeatherRequest;
import com.readygo.tpo.weather.dto.WeatherResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/weather")
public class WeatherApiController {

    private final WeatherService weatherService;

    @GetMapping
    public ResponseEntity<WeatherResponse> getWeather(@CurrentUser User user, @RequestParam WeatherRequest request) {
        WeatherResponse weatherResponse = weatherService.getWeather(user, request);
        return ResponseEntity.ok(weatherResponse);
    }
}
