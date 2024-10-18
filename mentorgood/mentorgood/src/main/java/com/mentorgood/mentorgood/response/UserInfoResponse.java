package com.mentorgood.mentorgood.response;

import com.mentorgood.mentorgood.enums.Gender;
import com.mentorgood.mentorgood.enums.Role;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserInfoResponse {
    private int userId;

    private String name;

    private String email;

    private Role role;

    private Gender gender;

    private String shortDescription;

    private String bio;
}
