package com.readygo.tpo.weather.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class DailyFcst {

    private LocalDate date;

    private HourTmp localMin;

    private HourTmp localMax;

    public DailyFcst(LocalDate date, HourTmp localMin, HourTmp localMax) {
        this.date = date;
        this.localMin = localMin;
        this.localMax = localMax;
    }

    @Override
    public String toString() {
        return "DailyFcst{" +
                "date=" + date +
                ", localMin=" + localMin +
                ", localMax=" + localMax +
                '}';
    }
}
