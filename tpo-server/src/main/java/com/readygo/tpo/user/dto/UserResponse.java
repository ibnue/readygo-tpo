package com.readygo.tpo.user.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.readygo.tpo.user.domain.Gender;
import com.readygo.tpo.user.domain.Role;
import com.readygo.tpo.user.domain.StyleCategory;
import com.readygo.tpo.user.domain.User;
import lombok.Getter;

import java.util.List;

@Getter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class UserResponse {

    private Long id;

    private String name;

    private Gender gender;

    private String email;

    private Role role;

    private List<StyleCategory> favoriteStyles;

    private int startHour;

    private int endHour;

    private UserResponse(User entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.gender = entity.getGender();
        this.email = entity.getEmail();
        this.role = entity.getRole();
        this.favoriteStyles = entity.getFavoriteStyles();
        this.startHour = entity.getStartHour();
        this.endHour = entity.getEndHour();
    }

    public static UserResponse of(User entity) {
        return new UserResponse(entity);
    }
}
