package com.jaya3.BackendSocialService.controller;

import com.jaya3.BackendSocialService.Funeral_Assistance;
import com.jaya3.BackendSocialService.service.FuneralAssistanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("funeral-assistance")
@CrossOrigin
public class FuneralAssistanceController {
    @Autowired
    FuneralAssistanceService funeralAssistanceService;
    @GetMapping("all-funeral-assistance")
    public List<Funeral_Assistance> getAllFuneralAssistanceRecords(){
        return funeralAssistanceService.getAllFuneralAssistanceRecords();
    }
    @GetMapping("{id}")
    public Optional<Funeral_Assistance> getFuneralAssistanceRecordsByID(@PathVariable Integer id){
        return funeralAssistanceService.getFuneralAssistanceRecordsByID(id);
    }

}
