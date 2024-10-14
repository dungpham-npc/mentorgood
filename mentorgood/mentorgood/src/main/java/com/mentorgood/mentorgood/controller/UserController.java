package com.mentorgood.mentorgood.controller;

import com.mentorgood.mentorgood.entity.User;
import com.mentorgood.mentorgood.response.ResponseData;
import com.mentorgood.mentorgood.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    UserService userService;
    ModelMapper mapper;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ResponseData<List<User>>> getAllUsers(){
        var result = userService.getAllUsers();
        ResponseData<List<User>> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }
}
