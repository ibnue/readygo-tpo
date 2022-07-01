package com.readygo.tpo.user.application;

import com.readygo.tpo.user.dao.UserRepository;
import com.readygo.tpo.user.domain.User;
import com.readygo.tpo.user.dto.UserRegisterRequest;
import com.readygo.tpo.user.dto.UserUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User registerUser(User user, UserRegisterRequest registerRequest) {
        user.update(
                registerRequest.getGender(),
                registerRequest.getStyle(),
                registerRequest.getStartHour(),
                registerRequest.getEndHour());

        return userRepository.save(user);
    }

    public User updateUser(User user, UserUpdateRequest updateRequest) {
        user.update(
                updateRequest.getStyle(),
                updateRequest.getStartHour(),
                updateRequest.getEndHour());

        return userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
