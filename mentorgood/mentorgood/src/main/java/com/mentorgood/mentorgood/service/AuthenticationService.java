package com.mentorgood.mentorgood.service;

import com.mentorgood.mentorgood.enums.ErrorCode;
import com.mentorgood.mentorgood.exception.AppException;
import com.mentorgood.mentorgood.repository.UserRepository;
import com.mentorgood.mentorgood.request.AuthenticationRequest;
import com.mentorgood.mentorgood.request.IntrospectRequest;
import com.mentorgood.mentorgood.response.AuthenticationResponse;
import com.mentorgood.mentorgood.response.IntrospectResponse;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    UserRepository userRepository;

    @NonFinal
    protected static final String SIGNER_KEY = "ZT3JISJc5K8EwpH2apMLWT+BMPcq+Ar6CFKSQobyJFkW3M/XHIyzDTIeB2OxqJnx";

    public IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException {
        var token = request.getToken();

        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);

        Date expTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(verifier);

        return IntrospectResponse.builder()
                .valid(verified && expTime.after(new Date()))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) throws JOSEException {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        var user = userRepository.findByUsername(request.getUsername());
        if (user == null) throw new AppException(ErrorCode.USER_NOT_EXISTED);

        boolean authenticated = passwordEncoder.matches(request.getPassword(), user.getPassword());

        if (!authenticated) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        var accessToken = generateToken(request.getUsername());
        var refreshToken = generateRefreshToken(request.getUsername());
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .authenticated(true)
                .build();
    }

    public String generateToken(String username) throws JOSEException {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(username)      //user logging in
                .issuer("localhost:8080")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(2, ChronoUnit.MINUTES).toEpochMilli()
                ))
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);

        jwsObject.sign(new MACSigner(SIGNER_KEY));

        return jwsObject.serialize();
    }

    public String generateRefreshToken(String username) throws JOSEException {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(username)
                .issuer("localhost:8080")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(7, ChronoUnit.DAYS).toEpochMilli() // Refresh token valid for 7 days
                ))
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);

        jwsObject.sign(new MACSigner(SIGNER_KEY));

        return jwsObject.serialize();
    }

    public AuthenticationResponse refreshToken(String refreshToken) throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(refreshToken);

        if (!signedJWT.verify(verifier) || signedJWT.getJWTClaimsSet().getExpirationTime().before(new Date())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        String username = signedJWT.getJWTClaimsSet().getSubject();
        var newAccessToken = generateToken(username);

        return AuthenticationResponse.builder()
                .accessToken(newAccessToken)
                .authenticated(true)
                .build();
    }
}
