package com.readygo.tpo.fashion.api;

import com.readygo.tpo.common.ApiResponse;
import com.readygo.tpo.common.ResponseMessage;
import com.readygo.tpo.fashion.application.FashionService;
import com.readygo.tpo.fashion.dto.FashionResponse;

import com.readygo.tpo.user.domain.StyleCategory;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/fashion")
public class FashionApiController {

    private final FashionService fashionService;

        @GetMapping
        public ApiResponse<FashionResponse> recommendFashion(@RequestParam List<StyleCategory> style, @RequestParam int min, @RequestParam int max) {
            FashionResponse fashionResponse = fashionService.recommendFashion(style, min, max);
            return ApiResponse.res(ResponseMessage.LOOKUP_FASHION, fashionResponse);
    }
}
