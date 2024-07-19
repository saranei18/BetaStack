package com.betastack.betastack.model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="commentid")
    private int commentId;
    @Column(name="username")
    private String username;

    public int getCommentId() {
        return commentId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(Integer totalVotes) {
        this.totalVotes = totalVotes;
    }

    @Column(name="comment")
    private String comment;
    @Column(name="total_votes")
    private Integer totalVotes;
    @Column(name="id")
    private int id;
}
