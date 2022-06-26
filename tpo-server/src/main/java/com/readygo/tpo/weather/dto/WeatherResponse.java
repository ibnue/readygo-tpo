package com.readygo.tpo.weather.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDate;

@Builder
public class WeatherResponse {

    private LocalDate baseDate;

    private int baseTime;

    private int nx;

    private int ny;

    private HourlyFcst current;

    private DailyFcst today;

    private DailyFcst tomorrow;
}
