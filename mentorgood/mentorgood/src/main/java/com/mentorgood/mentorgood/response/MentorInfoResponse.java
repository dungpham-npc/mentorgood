package com.mentorgood.mentorgood.response;

import com.mentorgood.mentorgood.enums.Gender;
import com.mentorgood.mentorgood.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MentorInfoResponse {
    private int userId;
    private String name;
    private String email;
    private String shortDescription;
    private String bio;
    private double starRating;
    private int numberOfReviews;
    private int numberOfSessionParticipated;
}
