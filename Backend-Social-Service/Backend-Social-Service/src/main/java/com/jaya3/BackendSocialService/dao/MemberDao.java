package com.jaya3.BackendSocialService.dao;

import com.jaya3.BackendSocialService.Members;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberDao extends JpaRepository<Members, Integer> {
    List<Members> findByIsBoardMember(Integer isBoardMember);
}
