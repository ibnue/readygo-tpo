package com.readygo.tpo.user.api;

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
    public ResponseEntity<UserResponse> registerUser(@Valid @RequestBody UserRegisterRequest registerRequest) {
        Long userId = userService.registerUser(registerRequest);
        return ResponseEntity.created(URI.create("/api/user/" + userId)).build();
    }

    @PutMapping("/me")
    public ResponseEntity<Void> updateUser(User user, @Valid @RequestBody UserUpdateRequest updateRequest) {
        userService.updateUser(user, updateRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/me")
    public ResponseEntity<Void> deleteUser(User user) {
        userService.deleteUser(user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getUser(User user) {
        return ResponseEntity.ok(UserResponse.of(user));
    }
}
