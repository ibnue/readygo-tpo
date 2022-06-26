package com.readygo.tpo.weather.domain;

import lombok.Getter;

@Getter
public enum SkyType {

    CLEAR(1, "맑음"),
    MOSTLY_CLOUDY(3, "구름많음"),
    CLOUDY(4, "흐림");

    private final int code;
    private final String value;

    SkyType(int code, String value) {
        this.code = code;
        this.value = value;
    }

    public static SkyType findByCode(int code) {
        for(SkyType s : values()) {
            if(s.code == code) {
                return s;
            }
        }
        return null;
    }
}
