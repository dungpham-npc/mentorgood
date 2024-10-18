package com.mentorgood.mentorgood.controller;

import com.mentorgood.mentorgood.exception.AppException;
import com.mentorgood.mentorgood.request.AuthenticationRequest;
import com.mentorgood.mentorgood.request.IntrospectRequest;
import com.mentorgood.mentorgood.request.UserRegistrationRequest;
import com.mentorgood.mentorgood.response.AuthenticationResponse;
import com.mentorgood.mentorgood.response.IntrospectResponse;
import com.mentorgood.mentorgood.response.ResponseData;
import com.mentorgood.mentorgood.response.UserRegistrationResponse;
import com.mentorgood.mentorgood.service.AuthenticationService;
import com.mentorgood.mentorgood.service.UserService;
import com.nimbusds.jose.JOSEException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ResponseData<UserRegistrationResponse>> register(
            @RequestBody UserRegistrationRequest request,
            HttpServletResponse response) {

        ResponseData<UserRegistrationResponse> responseData = new ResponseData<>();
        try {
            var result = userService.registerMentee(request);
            responseData.setCode(HttpStatus.OK.value());
            responseData.setResult(result);

            String accessToken = authenticationService.generateToken(request.getUsername());
            String refreshToken = authenticationService.generateRefreshToken(request.getUsername());

            Cookie accessTokenCookie = new Cookie("accessToken", accessToken);
            accessTokenCookie.setHttpOnly(true);
            accessTokenCookie.setPath("/");
            // Optionally set the secure flag if using HTTPS
            // accessTokenCookie.setSecure(true);

            Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
            refreshTokenCookie.setHttpOnly(true);
            refreshTokenCookie.setPath("/");
            // Optionally set the secure flag if using HTTPS
            // refreshTokenCookie.setSecure(true);

            response.addCookie(accessTokenCookie);
            response.addCookie(refreshTokenCookie);

            return new ResponseEntity<>(responseData, HttpStatus.OK);
        } catch (AppException e) {
            responseData.setCode(e.getErrorCode().getCode());
            responseData.setMessage(e.getMessage());
            return new ResponseEntity<>(responseData, HttpStatus.BAD_REQUEST);
        } catch (JOSEException e) {
            responseData.setCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
            responseData.setMessage("Token generation failed");
            return new ResponseEntity<>(responseData, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    ResponseEntity<ResponseData<AuthenticationResponse>> authenticate(
            @RequestBody AuthenticationRequest request,
            HttpServletResponse response) throws JOSEException {

        var result = authenticationService.authenticate(request);
        ResponseData<AuthenticationResponse> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        // Create and configure the access token cookie

        // Optionally set the secure flag if using HTTPS
        // accessTokenCookie.setSecure(true);

        // Create and configure the refresh token cookie
        Cookie refreshTokenCookie = new Cookie("refreshToken", result.getRefreshToken());
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setPath("/");
        // Optionally set the secure flag if using HTTPS
        // refreshTokenCookie.setSecure(true);

        // Add cookies to the response
        response.addCookie(refreshTokenCookie);

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/refresh")
    ResponseEntity<ResponseData<AuthenticationResponse>> refresh(
            @CookieValue("refreshToken") String refreshToken,
            HttpServletResponse response) throws JOSEException, ParseException {

        var result = authenticationService.refreshToken(refreshToken);
        ResponseData<AuthenticationResponse> responseData = new ResponseData<>();
        responseData.setCode(HttpStatus.OK.value());
        responseData.setResult(result);

        // Create and configure the new access token cookie
        Cookie accessTokenCookie = new Cookie("accessToken", result.getAccessToken());
        accessTokenCookie.setHttpOnly(true);
        accessTokenCookie.setPath("/");
        // Optionally set the secure flag if using HTTPS
        // accessTokenCookie.setSecure(true);

        // Add the new access token cookie to the response
        response.addCookie(accessTokenCookie);

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
