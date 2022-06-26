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
        return user.update(
                registerRequest.getGender(),
                registerRequest.getStyle(),
                registerRequest.getStartHour(),
                registerRequest.getEndHour());
    }

    public User updateUser(User user, UserUpdateRequest updateRequest) {
        return user.update(
                updateRequest.getStyle(),
                updateRequest.getStartHour(),
                updateRequest.getEndHour());
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
