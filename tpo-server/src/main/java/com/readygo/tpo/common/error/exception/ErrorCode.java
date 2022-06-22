package com.readygo.tpo.common.error.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {

    INTERNAL_SERVER_ERROR(500, "C001", "서버 오류가 발생했습니다."),
    METHOD_NOT_ALLOWED(400, "C002", "사용 불가한 메소드입니다."),
    INVALID_INPUT_VALUE(400, "C003", "요청 값이 유효하지 않습니다."),
    INVALID_TYPE_VALUE(400, "C004", "요청 값의 타입이 잘못되었습니다."),
    ENTITY_NOT_FOUND(400, "C005", "해당 엔티티를 찾을 수 없습니다."),

    AUTH_ERROR(400, "AU001", "인증 오류가 발생했습니다."),
    DUPLICATED_EMAIL(400, "AU002", "이미 존재하는 이메일입니다."),

    USER_NOT_FOUND(400, "U001", "해당 사용자가 존재하지 않습니다.");

    private final int status;
    private final String code;
    private final String message;

    ErrorCode(int status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
