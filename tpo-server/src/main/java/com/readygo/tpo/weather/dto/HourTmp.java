package com.readygo.tpo.weather.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class HourTmp {
    private int hour;
    private int tmp;

    @Override
    public String toString() {
        return "HourTmp{" +
                "hour=" + hour +
                ", tmp=" + tmp +
                '}';
    }
}
