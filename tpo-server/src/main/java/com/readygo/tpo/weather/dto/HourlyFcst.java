package com.readygo.tpo.weather.dto;

import com.readygo.tpo.weather.domain.RainType;
import com.readygo.tpo.weather.domain.SkyType;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class HourlyFcst {

    private int hour;

    private int tmp;

    private int humidity;

    private SkyType skyType;

    private RainType rainType;

    public HourlyFcst(int hour) {
        this.hour = hour;
    }
}
