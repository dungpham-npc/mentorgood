package com.mentorgood.mentorgood.service;

import com.mentorgood.mentorgood.entity.User;
import com.mentorgood.mentorgood.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {
    private final UserRepository repository;
    @Autowired
    public UserService(UserRepository userRepository){
        this.repository = userRepository;
    }

    public User addUser(User newUser){
        return repository.save(newUser);
    }

    public List<User> getUsers(){
        return repository.findAll();
    }
}
