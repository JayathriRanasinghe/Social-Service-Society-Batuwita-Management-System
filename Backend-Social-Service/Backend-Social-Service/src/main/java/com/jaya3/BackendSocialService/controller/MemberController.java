package com.jaya3.BackendSocialService.controller;

import com.jaya3.BackendSocialService.DTO.MemberDetails;
import com.jaya3.BackendSocialService.Funeral_Assistance;
import com.jaya3.BackendSocialService.Members;
import com.jaya3.BackendSocialService.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("member")
@CrossOrigin
public class MemberController {
    @Autowired
    MemberService memberService;
    @GetMapping("all-members")
    public List<MemberDetails> getAllMembers(){
        return memberService.getAllMembers();
    }
    @GetMapping("member/{id}")
    public Optional<Members> getMemberByID(@PathVariable Integer id){
        return memberService.getMemberByID(id);
    }
    @PostMapping("add-member")
    public String addMember(@RequestBody Members member){
        return memberService.addMember(member);
    }
    @PutMapping("update-member/{id}")
    public String updateMemberRecord(@PathVariable Integer id, @RequestBody Members updatedRecord) {
        return memberService.updateMemberRecord(id, updatedRecord);
    }

    @DeleteMapping("delete-record/{id}")
    public String deleteMemberRecord(@PathVariable Integer id){
        return memberService.deleteMemberRecord(id);
    }

    @DeleteMapping("delete-all-records")
    public String deleteAllMemberRecords(){
        return memberService.deleteAllMemberRecords();
    }

    //    Board member management
    @GetMapping("board-members")
    public List<Members> getBoardMembers(){
        return memberService.getBoardMembers(1);
    }

}
