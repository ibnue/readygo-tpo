package com.readygo.tpo.user.dao;

import com.readygo.tpo.user.domain.Gender;
import com.readygo.tpo.user.domain.StyleCategory;
import com.readygo.tpo.user.domain.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @AfterEach
    public void cleanup() {
        userRepository.deleteAll();
    }

    @Test
    public void saveUser() {
        //given
        List<StyleCategory> style = List.of(StyleCategory.CASUAL, StyleCategory.OFFICE);
        
        userRepository.save(User.builder()
                .name("Eunbi")
                .gender(Gender.FEMALE)
                .email("eunbi@gmail.com")
                .favoriteStyles(style)
                .startHour(7)
                .endHour(22)
                .build());

        //when
        List<User> userList = userRepository.findAll();

        //then
        User user = userList.get(0);
        assertThat(user.getName()).isEqualTo("Eunbi");
        assertThat(user.getFavoriteStyles()).containsOnly(StyleCategory.CASUAL, StyleCategory.OFFICE);
    }

    @Test
    public void baseTimeEntity() {
        //given
        LocalDateTime now = LocalDateTime.now();
        List<StyleCategory> style = List.of(StyleCategory.CASUAL, StyleCategory.OFFICE);

        userRepository.save(User.builder()
                .name("Eunbi")
                .gender(Gender.FEMALE)
                .email("eunbi@gmail.com")
                .favoriteStyles(style)
                .startHour(7)
                .endHour(22)
                .build());

        //when
        List<User> userList = userRepository.findAll();

        //then
        User user = userList.get(0);
        assertThat(user.getCreatedDate()).isAfter(now);
        assertThat(user.getModifiedDate()).isAfter(now);
    }
}