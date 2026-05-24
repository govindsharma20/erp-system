package com.govind.erp.controller;

import com.govind.erp.dto.AuthResponse;
import com.govind.erp.dto.LoginRequest;
import com.govind.erp.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(
            AuthService authService){

        this.authService = authService;
    }

    @PostMapping("/login")

    public AuthResponse login(
            @RequestBody LoginRequest request){

        return authService.login(request);
    }
}