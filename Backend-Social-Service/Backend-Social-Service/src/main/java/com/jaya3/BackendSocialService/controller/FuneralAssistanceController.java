package com.jaya3.BackendSocialService.controller;

import com.jaya3.BackendSocialService.Funeral_Assistance;
import com.jaya3.BackendSocialService.Members;
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

    @PostMapping("add-record")
    public String addAssistanceRecord(@RequestBody Funeral_Assistance assistanceRecord){
        return funeralAssistanceService.addAssistanceRecord(assistanceRecord);
    }

    @PutMapping("update-record/{id}")
    public String updateAssistanceRecord(@PathVariable Integer id, @RequestBody Funeral_Assistance updatedRecord) {
        return funeralAssistanceService.updateAssistanceRecord(id, updatedRecord);
    }

    @DeleteMapping("delete-record/{id}")
    public String deleteAssistanceRecord(@PathVariable Integer id){
        return funeralAssistanceService.deleteAssistanceRecord(id);
    }

    @DeleteMapping("delete-all-record")
    public String deleteAllAssistanceRecords(){
        return funeralAssistanceService.deleteAllAssistanceRecords();
    }

}
