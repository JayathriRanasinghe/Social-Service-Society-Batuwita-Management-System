

package com.jaya3.BackendSocialService.service;

import com.jaya3.BackendSocialService.FuneralAssistance;
import com.jaya3.BackendSocialService.dao.FuneralAssistanceDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuneralAssistanceService {
    @Autowired
    FuneralAssistanceDao funeralAssistanceDao;
    public List<FuneralAssistance> getAllFuneralAssistanceRecords() {
        return funeralAssistanceDao.findAll();
    }

    public Optional<FuneralAssistance> getFuneralAssistanceRecordsByID(Integer id) {
        return funeralAssistanceDao.findById(id);
    }

}
