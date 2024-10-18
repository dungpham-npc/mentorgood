package com.mentorgood.mentorgood.controller;

import com.mentorgood.mentorgood.entity.User;
import com.mentorgood.mentorgood.response.MentorInfoResponse;
import com.mentorgood.mentorgood.response.ResponseData;
import com.mentorgood.mentorgood.response.UserInfoResponse;
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

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ResponseData<List<User>>> getAllUsers(){
        var result = userService.getAllUsers();
        ResponseData<List<User>> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @GetMapping("/mentors")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ResponseData<List<MentorInfoResponse>>> getAllMentors(){
        var result = userService.getAllMentors();
        ResponseData<List<MentorInfoResponse>> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @GetMapping("/mentees")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ResponseData<List<UserInfoResponse>>> getAllMentees(){
        var result = userService.getAllMentees();
        ResponseData<List<UserInfoResponse>> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }
}
