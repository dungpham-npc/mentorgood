package com.mentorgood.mentorgood.request;

import com.mentorgood.mentorgood.enums.Role;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserRegistrationRequest {
    String username;
    String password;
    String email;
}
