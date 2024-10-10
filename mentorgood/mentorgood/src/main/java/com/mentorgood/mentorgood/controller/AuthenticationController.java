package com.mentorgood.mentorgood.controller;

import com.mentorgood.mentorgood.request.AuthenticationRequest;
import com.mentorgood.mentorgood.request.IntrospectRequest;
import com.mentorgood.mentorgood.response.AuthenticationResponse;
import com.mentorgood.mentorgood.response.IntrospectResponse;
import com.mentorgood.mentorgood.response.ResponseData;
import com.mentorgood.mentorgood.service.AuthenticationService;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/login")
    ResponseEntity<ResponseData<AuthenticationResponse>> authenticate(@RequestBody AuthenticationRequest request) throws JOSEException {
        var result = authenticationService.authenticate(request);
        ResponseData<AuthenticationResponse> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/introspect")
    ResponseEntity<ResponseData<IntrospectResponse>> introspect(@RequestBody IntrospectRequest request) throws ParseException, JOSEException {
        var result = authenticationService.introspect(request);

        ResponseData<IntrospectResponse> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }
}
