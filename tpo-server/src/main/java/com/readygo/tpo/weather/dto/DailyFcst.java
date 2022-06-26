package com.readygo.tpo.weather.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class DailyFcst {

    private LocalDate date;

    private HourTmp localMin;

    private HourTmp localMax;

    public DailyFcst(LocalDate date) {
        this.date = date;
    }
}
