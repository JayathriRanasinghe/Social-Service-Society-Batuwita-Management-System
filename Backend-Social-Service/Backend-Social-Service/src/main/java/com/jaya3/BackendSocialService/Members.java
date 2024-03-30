package com.jaya3.BackendSocialService;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.util.Date;

@Data
@Entity
public class Members {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer memberId;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String email;
    private Integer isBoardMember;
    private Date startDate;
}
