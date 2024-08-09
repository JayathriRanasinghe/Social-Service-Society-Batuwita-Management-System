package com.jaya3.BackendSocialService.service;

import com.jaya3.BackendSocialService.DTO.MemberDetails;
import com.jaya3.BackendSocialService.Funeral_Assistance;
import com.jaya3.BackendSocialService.Members;
import com.jaya3.BackendSocialService.dao.MemberDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    MemberDao memberDao;
    public List<MemberDetails> getAllMembers() {

        List<Members> entities = memberDao.findAll();
        List<MemberDetails> dtos = new ArrayList<>();

        SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");


        for (Members entity : entities) {
            MemberDetails dto = new MemberDetails();

            dto.setMemberId(entity.getMemberId());
            dto.setFullName(entity.getFirstName(), entity.getLastName());
            dto.setContactNumber(entity.getContactNumber());
            dto.setEmail(entity.getEmail());
            // Format the date
            Date date = entity.getStartDate();
            dto.setDate(dateFormatter.format(date));

            // Convert 0/1 to Yes/No
            dto.setFlag(entity.getIsBoardMember() == 1 ? "Yes" : "No");

            dtos.add(dto);
        }

        return dtos;


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

    public String updateMemberRecord(Integer id, Members updatedRecord) {
        Members memberRecord = memberDao.findById(id).get();
        memberRecord.setFirstName(updatedRecord.getFirstName());
        memberRecord.setLastName(updatedRecord.getLastName());
        memberRecord.setStartDate(updatedRecord.getStartDate());
        memberRecord.setEmail(updatedRecord.getEmail());
        memberRecord.setContactNumber(updatedRecord.getContactNumber());
        memberRecord.setIsBoardMember(updatedRecord.getIsBoardMember());
        memberDao.save(updatedRecord);
        return "Member record updated successfully";
    }

    public String deleteMemberRecord(Integer id) {
        Members deleteMemberRecord = memberDao.findById(id).get();
        memberDao.delete(deleteMemberRecord);
        return "Member record deleted successfully";
    }

    public String deleteAllMemberRecords() {
        memberDao.deleteAll();
        return "All member records deleted successfully";
    }
}
