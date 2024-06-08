package com.betastack.betastack.service;

import com.betastack.betastack.model.CommentResponse;
import com.betastack.betastack.model.Comments;
import com.betastack.betastack.repo.CommentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsService {
    @Autowired
    private CommentsRepo cRepo;
    @Autowired
    private Comments comment;
    @Autowired
    private CommentResponse commentResponse;

    public List<Comments> getComments(int id) {
        return cRepo.findByid(id);
    }

    public CommentResponse updateComment(Comments comment) {
        this.comment = cRepo.save(comment);

        if(this.comment.getCommentId() != 0 && this.comment.getCommentId() == comment.getCommentId()){
            commentResponse.setStatus("success");
        }else{
            commentResponse.setStatus("failed");
        }

        return commentResponse;
    }

    public CommentResponse deleteComment(Comments comment){
        /*cRepo.delete(comment);
        if(!cRepo.existsBycommentid(comment.getCommentId())){
            commentResponse.setStatus("success");
        } else {
            commentResponse.setStatus("failed");
        }*/

        return commentResponse;
    }
}
