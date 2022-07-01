package com.readygo.tpo.fashion.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class WeatherFashion {

    private String label;

    private List<FashionImage> images;
}
