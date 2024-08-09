package com.jaya3.BackendSocialService.service;

import com.jaya3.BackendSocialService.MemberFee;
import com.jaya3.BackendSocialService.dao.MemberFeeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class MemberFeeService {
    @Autowired
    MemberFeeDao memberFeeDao;

    public Optional<MemberFee> getMemberFeeById(Integer id){
        return memberFeeDao.findById(id);
    }

}
