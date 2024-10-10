package com.mentorgood.mentorgood.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "sessions")
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SessionID")
    private int sessionId;

    @Column(name = "SessionDate")
    private LocalDateTime sessionDate;

    @Column(name = "MentorID")
    private int mentorId;

    @Column(name = "MenteeID")
    private int menteeId;

}
