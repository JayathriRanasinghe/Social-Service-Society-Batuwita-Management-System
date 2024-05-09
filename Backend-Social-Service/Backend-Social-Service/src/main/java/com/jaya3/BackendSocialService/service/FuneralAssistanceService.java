

package com.jaya3.BackendSocialService.service;

import com.jaya3.BackendSocialService.Funeral_Assistance;
import com.jaya3.BackendSocialService.Members;
import com.jaya3.BackendSocialService.dao.FuneralAssistanceDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuneralAssistanceService {
    @Autowired
    FuneralAssistanceDao funeralAssistanceDao;
    public List<Funeral_Assistance> getAllFuneralAssistanceRecords() {
        return funeralAssistanceDao.findAll();
    }

    public Optional<Funeral_Assistance> getFuneralAssistanceRecordsByID(Integer id) {
        return funeralAssistanceDao.findById(id);
    }

    public String addAssistanceRecord(Funeral_Assistance assistanceRecord) {
        funeralAssistanceDao.save(assistanceRecord);
        return "Success!";
    }

    public String updateAssistanceRecord(Integer id, Funeral_Assistance assistanceRecord) {

        Funeral_Assistance updatedRecord = funeralAssistanceDao.findById(id).get();
        updatedRecord.setMember_id(assistanceRecord.getMember_id());
        updatedRecord.setDate_of_death(assistanceRecord.getDate_of_death());
        updatedRecord.setBeneficiary_name(assistanceRecord.getBeneficiary_name());
        updatedRecord.setRelationship(assistanceRecord.getRelationship());
        updatedRecord.setAssistance_amount(assistanceRecord.getAssistance_amount());
        funeralAssistanceDao.save(updatedRecord);
        return "Update successful!";
    }


    public String deleteAssistanceRecord(Integer id) {
        Funeral_Assistance deleteFuneralAssistance = funeralAssistanceDao.findById(id).get();
        funeralAssistanceDao.delete(deleteFuneralAssistance);
        return "Delete successful!";
    }

    public String deleteAllAssistanceRecords() {
        funeralAssistanceDao.deleteAll();
        return "all funeral records are deleted!";
    }
}
