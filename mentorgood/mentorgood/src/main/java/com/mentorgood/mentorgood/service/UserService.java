package com.mentorgood.mentorgood.service;

import com.mentorgood.mentorgood.entity.User;
import com.mentorgood.mentorgood.enums.ErrorCode;
import com.mentorgood.mentorgood.enums.Role;
import com.mentorgood.mentorgood.exception.AppException;
import com.mentorgood.mentorgood.repository.UserRepository;
import com.mentorgood.mentorgood.request.UserRegistrationRequest;
import com.mentorgood.mentorgood.response.UserRegistrationResponse;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {
    UserRepository repository;
    PasswordEncoder passwordEncoder;
    ModelMapper mapper;

    public UserRegistrationResponse addMentee(UserRegistrationRequest request){
        if (repository.findByUsername(request.getUsername()) != null)
            throw new AppException(ErrorCode.USERNAME_EXISTED);

        String newUserPassword = request.getPassword();
        if (newUserPassword != null)
            request.setPassword(passwordEncoder.encode(newUserPassword));


        User newUser = mapper.map(request, User.class);
        newUser.setRole(Role.Mentee);
        repository.save(newUser);

        return UserRegistrationResponse.builder()
                .email(newUser.getEmail())
                .username(newUser.getUsername())
                .build();
    }

    public UserRegistrationResponse addMentor(UserRegistrationRequest request){
        if (repository.findByUsername(request.getUsername()) != null)
            throw new AppException(ErrorCode.USERNAME_EXISTED);

        String newUserPassword = request.getPassword();
        if (newUserPassword != null)
            request.setPassword(passwordEncoder.encode(newUserPassword));

        User newUser = mapper.map(request, User.class);
        newUser.setRole(Role.Mentor);
        repository.save(newUser);
        return UserRegistrationResponse.builder()
                .email(newUser.getEmail())
                .username(newUser.getUsername())
                .build();
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    public void updateUserInfo(int userId, User newUser) {
        User oldUser = repository.findByUserId(userId);
        if (oldUser == null)
            throw new AppException(ErrorCode.USER_NOT_EXISTED);

        if (!newUser.getName().equals(oldUser.getName()))
            oldUser.setName(newUser.getName());
        if (!newUser.getAvailability().equals(oldUser.getAvailability()))
            oldUser.setAvailability(newUser.getAvailability());
        if (!newUser.getGender().equals(oldUser.getGender()))
            oldUser.setGender(newUser.getGender());

        repository.save(oldUser);
    }

}
