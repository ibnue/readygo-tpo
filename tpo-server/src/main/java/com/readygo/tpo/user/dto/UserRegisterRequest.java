package com.readygo.tpo.user.dto;

import com.readygo.tpo.user.domain.Gender;
import com.readygo.tpo.user.domain.StyleCategory;
import com.readygo.tpo.user.domain.User;
import lombok.Getter;

import javax.validation.constraints.*;
import java.util.List;

@Getter
public class UserRegisterRequest {

    @NotNull
    private String name;

    @NotNull
    private Gender gender;

    @Email
    private String email;

    @Min(value = 6, message = "출근 시간은 6시 이후여야 합니다.")
    @Max(value = 22, message = "출근 시간은 22시를 넘을 수 없습니다.")
    private int startHour;

    @Min(value = 7, message = "퇴근 시간은 7시 이후여야 합니다.")
    @Max(value = 23, message = "퇴근 시간은 23시를 넘을 수 없습니다.")
    private int endHour;

    @Size(min = 1, max = 7, message = "스타일 개수는 1개 이상, 7개 이하여야 합니다.")
    private List<StyleCategory> style;

    public User toEntity() {
        return User.builder()
                .name(name)
                .gender(gender)
                .email(email)
                .startHour(startHour)
                .endHour(endHour)
                .favoriteStyles(style)
                .build();
    }
}
