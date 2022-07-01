package com.readygo.tpo.weather.domain;

import lombok.Getter;

@Getter
public enum RainType {

    NONE(0, "없음"),
    RAIN(1, "비"),
    RAIN_SNOW(2, "비/눈"),
    SNOW(3, "눈"),
    SHOWER(4, "소나기");

    private final int code;
    private final String value;

    RainType(int code, String value) {
        this.code = code;
        this.value = value;
    }

    public static RainType findByCode(int code) {
        for(RainType r : values()) {
            if(r.code == code) {
                return r;
            }
        }
        return null;
    }
}
