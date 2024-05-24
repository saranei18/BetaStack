package com.betastack.betastack;

import com.betastack.betastack.model.Posts;
import com.betastack.betastack.repo.CommentsRepo;
import com.betastack.betastack.repo.PostsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BetaStackService {
    @Autowired
    private PostsRepo pRepo;

    @Autowired
    private CommentsRepo cRepo;

    public List<Posts> getAllPosts() {
    }
}
