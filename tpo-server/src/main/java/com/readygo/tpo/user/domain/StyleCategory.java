package com.readygo.tpo.user.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.stream.Stream;

public enum StyleCategory {

    CASUAL("캐주얼"),
    STREET("스트릿"),
    OFFICE("오피스룩"),
    ROMANTIC("로맨틱"),
    SEXY("섹시글램"),
    UNIQUE("유니크"),
    UNISEX("유니섹스");

    private final String value;

    StyleCategory(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @JsonCreator
    public static StyleCategory create(String requestValue) {
        return Stream.of(values())
                .filter(value -> value.toString().equalsIgnoreCase(requestValue))
                .findFirst()
                .orElse(null);
    }
}
