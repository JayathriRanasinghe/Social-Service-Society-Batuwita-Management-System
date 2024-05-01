package com.jaya3.BackendSocialService;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class FuneralAssistance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String receiverID;
    private String giverID;
    private String forWho;
    private Integer amount;
    private Date givenDate;
}
