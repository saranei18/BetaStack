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
@CrossOrigin(origins={"http://localhost:3000", "http://172.24.92.235:3000", "https://583b-139-167-79-126.ngrok-free.app"})
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
        System.out.println("Updating the Comments");
        return service.updateComment(comment);
    }

    @DeleteMapping("/")
    CommentResponse deleteComment(@RequestBody Comments comment){
        return service.deleteComment(comment);
    }
}
