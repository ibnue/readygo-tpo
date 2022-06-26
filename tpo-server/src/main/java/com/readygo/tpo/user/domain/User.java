package com.readygo.tpo.user.domain;

import com.readygo.tpo.common.domain.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;

@Getter
@Entity
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Gender gender;

    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ElementCollection(targetClass = StyleCategory.class)
    @CollectionTable(name = "user_style")
    @Column(name = "style")
    @LazyCollection(LazyCollectionOption.FALSE)
    @Enumerated(EnumType.STRING)
    private List<StyleCategory> favoriteStyles;

    private int startHour;

    private int endHour;

    @Builder
    public User(String name, Gender gender, String email, Role role) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.role = role;
    }

    public User update(String name) {
        this.name = name;
        return this;
    }

    public User update(List<StyleCategory> favoriteStyles, int startHour, int endHour) {
        this.favoriteStyles = favoriteStyles;
        this.startHour = startHour;
        this.endHour = endHour;
        return this;
    }

    public User update(Gender gender, List<StyleCategory> favoriteStyles, int startHour, int endHour) {
        this.gender = gender;
        this.favoriteStyles = favoriteStyles;
        this.startHour = startHour;
        this.endHour = endHour;
        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}