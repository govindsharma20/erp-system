package com.govind.erp.service;

import com.govind.erp.dto.AuthResponse;
import com.govind.erp.dto.LoginRequest;
import com.govind.erp.security.JwtService;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final JwtService jwtService;

    public AuthService(
            JwtService jwtService){

        this.jwtService = jwtService;
    }

    public AuthResponse login(
            LoginRequest request){

        String token =
                jwtService.generateToken(
                        request.getUsername()
                );

        return new AuthResponse(token);
    }
}