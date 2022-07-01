package com.readygo.tpo.weather.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.readygo.tpo.weather.domain.RainType;
import com.readygo.tpo.weather.domain.SkyType;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class HourlyFcst {

    private int hour;

    private int tmp;

    private int humidity;

    private SkyType skyType;

    private RainType rainType;

    public HourlyFcst(int hour) {
        this.hour = hour;
    }

    @Override
    public String toString() {
        return "HourlyFcst{" +
                "hour=" + hour +
                ", tmp=" + tmp +
                ", humidity=" + humidity +
                ", skyType=" + skyType +
                ", rainType=" + rainType +
                '}';
    }
}
