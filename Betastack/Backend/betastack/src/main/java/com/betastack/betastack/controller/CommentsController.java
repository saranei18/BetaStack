package com.betastack.betastack.controller;

import com.betastack.betastack.model.CommentResponse;
import com.betastack.betastack.model.Comments;
import com.betastack.betastack.repo.CommentsRepo;
import com.betastack.betastack.service.CommentsService;
import com.betastack.betastack.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data/product/comments")
@CrossOrigin(origins={"http://localhost:3000"})
public class CommentsController {

    @Autowired
    private CommentsService service;
    @Autowired
    private JwtService jwtService;

    @GetMapping("/{id}")
    List<Comments> getComments(@PathVariable("id") int productId){
        System.out.println("Gng to get the Comments");
        return service.getComments(productId);
    }

    @PostMapping("/edit")
    public CommentResponse updateComment(@RequestBody Comments comment){
        System.out.println("Updating the Comments");
        return service.updateComment(comment);
    }

    @PostMapping("/")
    public CommentResponse addComment(@RequestBody Comments comment,
                           @RequestHeader(value = "Authorization") String authorizationHeader) {
        comment.setUsername(jwtService.extractUserName(authorizationHeader.substring(7)));
        comment.setTotalVotes(0);
        return service.addComment(comment);
    }

    public @DeleteMapping("/")
    CommentResponse deleteComment(@RequestBody Comments comment){
        return service.deleteComment(comment);
    }
}
