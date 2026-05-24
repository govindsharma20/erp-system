package com.govind.erp.service;

import com.govind.erp.entity.User;
import com.govind.erp.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(
            UserRepository userRepository){

        this.userRepository = userRepository;
    }

    public User saveUser(
            User user){

        return userRepository.save(user);
    }
}