package com.jaya3.BackendSocialService.controller;

import com.jaya3.BackendSocialService.MemberFee;
import com.jaya3.BackendSocialService.Members;
import com.jaya3.BackendSocialService.service.MemberFeeService;
import com.jaya3.BackendSocialService.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

public class MemberFeeController {
    @Autowired
    MemberFeeService memberFeeService;
    @GetMapping("member-fee/{id}")
    public Optional<MemberFee> getMemberFeeById(@PathVariable Integer id){
        return memberFeeService.getMemberFeeById(id);
    }
}
