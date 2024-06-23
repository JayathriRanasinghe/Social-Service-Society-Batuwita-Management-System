package com.jaya3.BackendSocialService.dao;

import com.jaya3.BackendSocialService.Funeral_Assistance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FuneralAssistanceDao extends JpaRepository<Funeral_Assistance, Integer> {

}