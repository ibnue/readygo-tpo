package com.readygo.tpo.user.domain;

import com.readygo.tpo.common.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Getter
@Setter
@Entity
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Gender gender;

    private String email;

    private List<StyleCategory> favoriteStyles;

    private int startHour;

    private int endHour;

    @Builder
    public User(String name, Gender gender, String email, List<StyleCategory> favoriteStyles, int startHour, int endHour) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.favoriteStyles = favoriteStyles;
        this.startHour = startHour;
        this.endHour = endHour;
    }
}