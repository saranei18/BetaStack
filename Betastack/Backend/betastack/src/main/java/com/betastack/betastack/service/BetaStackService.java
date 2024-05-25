package com.betastack.betastack.service;

import com.betastack.betastack.model.HomeResponse;
import com.betastack.betastack.model.PostData;
import com.betastack.betastack.model.Posts;
import com.betastack.betastack.model.PostsResponse;
import com.betastack.betastack.repo.CommentsRepo;
import com.betastack.betastack.repo.PostsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BetaStackService {
    @Autowired
    private PostsRepo pRepo;

    @Autowired
    private CommentsRepo cRepo;

    @Autowired
    public List<Posts> sqlPosts;

    @Autowired
    public List<PostData> postData;

    @Autowired
    public PostsResponse postsResponse;

    @Autowired
    public HomeResponse homeResponse;

    public PostsResponse getAllPosts() {
        System.out.println("Getting All Posts");
        sqlPosts = pRepo.findAll();

        if(sqlPosts.isEmpty()){
            postsResponse.setStatus("failed");
        } else{
            postsResponse.setDataForResponse(sqlPosts, postData);
            if(postsResponse.getPosts().isEmpty()) {
                postsResponse.setStatus("failed");
            } else{
                postsResponse.setStatus("success");
            }
        }

        return postsResponse;
    }

    public List<Posts> getLimitedPosts(int pageno) {
        Pageable pageable = PageRequest.of(pageno, 10);
        Page<Posts> postPage = pRepo.findAll(pageable);
        return postPage.getContent();
    }

    public HomeResponse getStackDetails() {

        try {
            int TotalPosts = pRepo.getTotalPostCount();
            System.out.println("Totalposts " +TotalPosts);
            homeResponse.setStatus("success");
            homeResponse.setTotalNoOfPosts(String.valueOf(TotalPosts));
        } catch (Exception e){
            homeResponse.setStatus("failed");
            System.out.println("getBetaStackDetails Failed due to "+ e.toString());;
        }

        return homeResponse;
    }
}
