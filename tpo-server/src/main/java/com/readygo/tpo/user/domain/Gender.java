package com.readygo.tpo.user.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.stream.Stream;

public enum Gender {

    MALE, FEMALE;

    @JsonCreator
    public static Gender create(String requestValue) {
        return Stream.of(values())
                .filter(value -> value.toString().equalsIgnoreCase(requestValue))
                .findFirst()
                .orElse(null);
    }
}
