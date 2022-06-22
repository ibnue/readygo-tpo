package com.readygo.tpo.user.application;

import com.readygo.tpo.common.error.exception.AuthException;
import com.readygo.tpo.common.error.exception.ErrorCode;
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

    public Long registerUser(UserRegisterRequest registerRequest) {
        if(userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new AuthException(ErrorCode.DUPLICATED_EMAIL);
        }
        return userRepository.save(registerRequest.toEntity()).getId();
    }

    public void updateUser(User user, UserUpdateRequest updateRequest) {
        user.setName(updateRequest.getName());
        user.setStartHour(updateRequest.getStartHour());
        user.setEndHour(updateRequest.getEndHour());
        user.setFavoriteStyles(updateRequest.getStyle());
        userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
