package com.betastack.betastack.model;

import org.springframework.stereotype.Component;

@Component
public class CommentResponse {
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
