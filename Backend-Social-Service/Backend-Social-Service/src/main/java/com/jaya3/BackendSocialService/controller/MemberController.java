package com.jaya3.BackendSocialService.controller;

import com.jaya3.BackendSocialService.Members;
import com.jaya3.BackendSocialService.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("member")
public class MemberController {
    @Autowired
    MemberService memberService;
    @GetMapping("all-members")
    public List<Members> getAllMembers(){
        return memberService.getAllMembers();
    }
    @GetMapping("member/{id}")
    public Optional<Members> getMemberByID(@PathVariable Integer id){
        return memberService.getMemberByID(id);
    }

    @GetMapping("board-members")
    public List<Members> getBoardMembers(){
        return memberService.getBoardMembers(1);
    }

    @PostMapping("add-member")
    public String addMember(@RequestBody Members member){
        return memberService.addMember(member);
    }


}
