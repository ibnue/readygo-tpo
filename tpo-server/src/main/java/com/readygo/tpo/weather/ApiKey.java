package com.readygo.tpo.weather;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Getter
@Component
public class ApiKey {
    @Value("${kma-service-key}")
    private String key;
}
