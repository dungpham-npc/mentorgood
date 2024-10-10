package com.mentorgood.mentorgood.exception;

import com.mentorgood.mentorgood.enums.ErrorCode;
import com.mentorgood.mentorgood.response.ResponseData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ResponseData> runtimeExceptionHandler(RuntimeException e){
        ResponseData responseData = new ResponseData();

        responseData.setCode(1001);
        responseData.setMessage(e.getMessage());

        return ResponseEntity.badRequest().body(responseData);
    }

    @ExceptionHandler(AppException.class)
    public ResponseEntity<ResponseData> appExceptionHandler(AppException e) {
        ErrorCode errorCode = e.getErrorCode();
        ResponseData responseData = new ResponseData();

        responseData.setCode(errorCode.getCode());
        responseData.setMessage(e.getMessage());

        return ResponseEntity.badRequest().body(responseData);
    }

}
