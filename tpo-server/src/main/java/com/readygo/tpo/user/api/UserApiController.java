package com.readygo.tpo.user.api;

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
import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserApiController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<UserResponse> registerUser(@CurrentUser User user, @Valid @RequestBody UserRegisterRequest registerRequest) {
        User registeredUser = userService.registerUser(user, registerRequest);
        return ResponseEntity.ok(UserResponse.of(registeredUser));
    }

    @PutMapping("/me")
    public ResponseEntity<UserResponse> updateUser(@CurrentUser User user, @Valid @RequestBody UserUpdateRequest updateRequest) {
        User updatedUser = userService.updateUser(user, updateRequest);
        return ResponseEntity.ok(UserResponse.of(updatedUser));
    }

    @DeleteMapping("/me")
    public ResponseEntity<Void> deleteUser(@CurrentUser User user) {
        userService.deleteUser(user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getUser(@CurrentUser User user) {
        return ResponseEntity.ok(UserResponse.of(user));
    }
}
