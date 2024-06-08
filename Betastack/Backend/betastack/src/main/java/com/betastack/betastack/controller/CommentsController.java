package com.betastack.betastack.controller;

import com.betastack.betastack.model.CommentResponse;
import com.betastack.betastack.model.Comments;
import com.betastack.betastack.repo.CommentsRepo;
import com.betastack.betastack.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data/product/comments")
@CrossOrigin(origins="http://localhost:3000")
public class CommentsController {

    @Autowired
    private CommentsService service;

    @GetMapping("/{id}")
    List<Comments> getComments(@PathVariable("id") int productId){
        System.out.println("Gng to get the Comments");
        return service.getComments(productId);
    }

    @PutMapping("/")
    CommentResponse updateComment(@RequestBody Comments comment){
        return service.updateComment(comment);
    }

    @DeleteMapping("/")
    CommentResponse deleteComment(@RequestBody Comments comment){
        return service.deleteComment(comment);
    }
}
