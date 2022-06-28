package com.readygo.tpo.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ApiResponse<T> {

    boolean success;

    String message;

    private T data;

    public ApiResponse(String message) {
        this.success = true;
        this.message = message;
        this.data = null;
    }

    public static<T> ApiResponse<T> res(String message) {
        return res(message, null);
    }

    public static<T> ApiResponse<T> res(String message, T data) {
        return ApiResponse.<T>builder()
                .success(true)
                .message(message)
                .data(data)
                .build();
    }
}
