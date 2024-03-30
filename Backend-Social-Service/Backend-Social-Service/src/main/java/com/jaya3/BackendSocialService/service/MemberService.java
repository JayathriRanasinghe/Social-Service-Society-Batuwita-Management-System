package com.jaya3.BackendSocialService.service;

import com.jaya3.BackendSocialService.Members;
import com.jaya3.BackendSocialService.dao.MemberDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    MemberDao memberDao;
    public List<Members> getAllMembers() {
        return memberDao.findAll();
    }

    public Optional<Members> getMemberByID(Integer id) {
        return memberDao.findById(id);
    }

    public List<Members> getBoardMembers(Integer isBoardMember) {
        return memberDao.findByIsBoardMember(isBoardMember);
    }

    public String addMember(Members member) {
        memberDao.save(member);
        return "Success!";
    }
}
