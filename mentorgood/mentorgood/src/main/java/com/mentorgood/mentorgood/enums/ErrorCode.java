package com.mentorgood.mentorgood.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum ErrorCode {
    USER_EXISTED(1001, "User existed"),
    UNKNOWN(9999, "Uncategorized error"),
    USER_NOT_EXISTED(1002, "User not existed"),
    UNAUTHENTICATED(1003, "Unauthenticated"),
    USERNAME_EXISTED(1004, "Username already existed")
    ;


    private int code;
    private String message;
}
