package com.readygo.tpo.user.api;

import com.readygo.tpo.common.ApiResponse;
import com.readygo.tpo.common.ResponseMessage;
import com.readygo.tpo.config.security.CurrentUser;
import com.readygo.tpo.user.application.UserService;
import com.readygo.tpo.user.domain.User;
import com.readygo.tpo.user.dto.UserRegisterRequest;
import com.readygo.tpo.user.dto.UserResponse;
import com.readygo.tpo.user.dto.UserUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserApiController {

    private final UserService userService;

    @PostMapping
    public ApiResponse<UserResponse> registerUser(@CurrentUser User user, @Valid @RequestBody UserRegisterRequest registerRequest) {
        User registeredUser = userService.registerUser(user, registerRequest);
        UserResponse userResponse = UserResponse.of(registeredUser);
        return ApiResponse.res(ResponseMessage.CREATED_USER, userResponse);
    }

    @PutMapping("/me")
    public ApiResponse<UserResponse> updateUser(@CurrentUser User user, @Valid @RequestBody UserUpdateRequest updateRequest) {
        User updatedUser = userService.updateUser(user, updateRequest);
        UserResponse userResponse = UserResponse.of(updatedUser);
        return ApiResponse.res(ResponseMessage.UPDATE_USER, userResponse);
    }

    @DeleteMapping("/me")
    public ApiResponse<Void> deleteUser(@CurrentUser User user) {
        userService.deleteUser(user);
        return ApiResponse.res(ResponseMessage.DELETE_USER);
    }

    @GetMapping("/me")
    public ApiResponse<UserResponse> getUser(@CurrentUser User user) {
        UserResponse userResponse = UserResponse.of(user);
        return ApiResponse.res(ResponseMessage.READ_USER, userResponse);
    }
}