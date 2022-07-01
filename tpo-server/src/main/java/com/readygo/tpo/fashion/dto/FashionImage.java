package com.readygo.tpo.fashion.dto;

import com.readygo.tpo.user.domain.StyleCategory;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class FashionImage {

    private StyleCategory style;

    private boolean hasOuter;

    private String url;
}