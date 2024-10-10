package com.mentorgood.mentorgood.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "session_feedback")
public class SessionFeedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FeedbackID")
    private int feedbackId;

    @Column(name = "SessionID")
    private int sessionId;

    @Column(name = "Rating")
    private int rating;

    @Column(name = "Comments")
    private String comments;
}
