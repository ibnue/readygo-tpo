package com.readygo.tpo.config.security;

import com.readygo.tpo.common.error.exception.EntityNotFoundException;
import com.readygo.tpo.common.error.exception.ErrorCode;
import com.readygo.tpo.user.dao.UserRepository;
import com.readygo.tpo.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException(ErrorCode.USER_NOT_FOUND));

        return UserPrincipal.create(user);
    }
}
