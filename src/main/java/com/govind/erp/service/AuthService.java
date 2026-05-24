package com.govind.erp.service;

import com.govind.erp.dto.AuthResponse;
import com.govind.erp.dto.LoginRequest;
import com.govind.erp.entity.User;
import com.govind.erp.repository.UserRepository;
import com.govind.erp.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepository,
            JwtService jwtService,
            PasswordEncoder passwordEncoder){

        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public AuthResponse login(
            LoginRequest request){

        User user =
                userRepository.findByUsername(
                        request.getUsername()
                ).orElseThrow(
                        () -> new RuntimeException(
                                "User not found"
                        )
                );

        if(!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())){

            throw new RuntimeException(
                    "Invalid password"
            );
        }

        String token =
                jwtService.generateToken(
                        user.getUsername()
                );

        return new AuthResponse(token);
    }
}