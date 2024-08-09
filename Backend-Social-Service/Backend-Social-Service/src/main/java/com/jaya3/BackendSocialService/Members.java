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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer memberId;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String email;
    private Integer isBoardMember;
    private Date startDate;

    public Date getStartDate() {
        return startDate;
    }

    public Integer getIsBoardMember() {
        return isBoardMember;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Integer getMemberId() {
        return memberId;
    }

    public String getContactNumber() {
        return contactNumber;
    }

}
