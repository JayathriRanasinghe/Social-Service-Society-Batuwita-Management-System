package com.jaya3.BackendSocialService;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Funeral_Assistance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer assistance_id;
    private Integer member_id;
    private Date date_of_death;
    private String beneficiary_name;
    private String relationship;
    private Integer assistance_amount;

    public Integer getId() {
        return assistance_id;
    }
}
