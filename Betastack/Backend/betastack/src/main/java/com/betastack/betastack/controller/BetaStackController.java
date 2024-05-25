package com.betastack.betastack.controller;

import com.betastack.betastack.model.HomeResponse;
import com.betastack.betastack.model.Posts;
import com.betastack.betastack.model.PostsResponse;
import com.betastack.betastack.service.BetaStackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BetaStackController {

    @Autowired
    private BetaStackService service;

    @GetMapping("posts")
    PostsResponse getAllPosts(){
        System.out.println("Inside Get posts Mapping");
        return service.getAllPosts();
    }

    @GetMapping("/")
    HomeResponse getBetaStackDetails(){
        System.out.println("Inside getOverallDetails");
        return service.getStackDetails();
    }

    @GetMapping("posts/{id}")
    List<Posts> getLimitPosts(@PathVariable("id") int pageno){
        System.out.println("Getting posts for pageNo "+pageno);
        return service.getLimitedPosts(pageno);
    }
}
