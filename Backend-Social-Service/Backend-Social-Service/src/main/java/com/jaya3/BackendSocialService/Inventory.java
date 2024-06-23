

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
public class Inventory {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer inventoryTypeID;
    private String name;
    private Integer incharge_person_ID;
    private Integer count;
    private Date updatedDate;
}
