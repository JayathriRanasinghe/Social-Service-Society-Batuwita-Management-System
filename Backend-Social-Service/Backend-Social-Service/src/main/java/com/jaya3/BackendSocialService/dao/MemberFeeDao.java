package com.jaya3.BackendSocialService.dao;

import com.jaya3.BackendSocialService.MemberFee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberFeeDao extends JpaRepository<MemberFee, Integer> {
}
