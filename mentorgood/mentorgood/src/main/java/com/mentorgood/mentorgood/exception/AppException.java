package com.mentorgood.mentorgood.exception;

import com.mentorgood.mentorgood.enums.ErrorCode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class AppException extends RuntimeException{
    public AppException(ErrorCode errorCode){
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
    private ErrorCode errorCode;
}
