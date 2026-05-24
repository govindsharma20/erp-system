package com.govind.erp.controller;

import com.govind.erp.entity.User;
import com.govind.erp.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService){

        this.userService = userService;
    }

    @PostMapping

    public User createUser(
            @RequestBody User user){

        return userService.saveUser(user);
    }
}