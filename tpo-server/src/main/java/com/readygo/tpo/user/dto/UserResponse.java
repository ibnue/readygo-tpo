package com.readygo.tpo.user.dto;

import com.readygo.tpo.user.domain.StyleCategory;
import com.readygo.tpo.user.domain.User;
import lombok.Getter;

import java.util.List;

@Getter
public class UserResponse {

    private Long id;
    private String name;
    private String email;
    private List<StyleCategory> favoriteStyles;

    private UserResponse(User entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.email = entity.getEmail();
        this.favoriteStyles = entity.getFavoriteStyles();
    }

    public static UserResponse of(User entity) {
        return new UserResponse(entity);
    }
}
