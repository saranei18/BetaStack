package com.betastack.betastack;

import com.betastack.betastack.model.Posts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BetaStackController {

    @Autowired
    private BetaStackService service;

    @GetMapping("posts")
    List<Posts> getAllPosts(){
        return service.getAllPosts();
    }

    
}
