

package com.jaya3.BackendSocialService.service;

import com.jaya3.BackendSocialService.Funeral_Assistance;
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

}
