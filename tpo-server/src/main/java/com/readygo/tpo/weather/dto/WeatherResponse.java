package com.readygo.tpo.weather.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class WeatherResponse {

    private LocalDate baseDate;

    private int baseTime;

    private int nx;

    private int ny;

    private HourlyFcst current;

    private DailyFcst today;

    private DailyFcst tomorrow;

    @Builder
    public WeatherResponse(LocalDate baseDate, int baseTime, int nx, int ny, HourlyFcst current, DailyFcst today, DailyFcst tomorrow) {
        this.baseDate = baseDate;
        this.baseTime = baseTime;
        this.nx = nx;
        this.ny = ny;
        this.current = current;
        this.today = today;
        this.tomorrow = tomorrow;
    }

    @Override
    public String toString() {
        return "WeatherResponse{" +
                "baseDate=" + baseDate +
                ", baseTime=" + baseTime +
                ", nx=" + nx +
                ", ny=" + ny +
                ", current=" + current +
                ", today=" + today +
                ", tomorrow=" + tomorrow +
                '}';
    }
}
