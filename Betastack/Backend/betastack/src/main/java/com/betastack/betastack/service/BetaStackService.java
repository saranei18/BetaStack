package com.betastack.betastack.service;

import com.betastack.betastack.model.HomeResponse;
import com.betastack.betastack.model.Product;
import com.betastack.betastack.model.ProductData;
import com.betastack.betastack.model.ProductResponse;
import com.betastack.betastack.repo.CommentsRepo;
import com.betastack.betastack.repo.PostsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class BetaStackService {
    @Autowired
    private PostsRepo pRepo;

    @Autowired
    private CommentsRepo cRepo;

    @Autowired
    public List<Product> sqlPosts;

    @Autowired
    public List<ProductData> postData;

    @Autowired
    public ProductResponse postsResponse;

    @Autowired
    public HomeResponse homeResponse;

    public ProductResponse getAllPosts() {
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

    public List<Product> getLimitedPosts(int pageno) {
        Pageable pageable = PageRequest.of(pageno, 10);
        Page<Product> postPage = pRepo.findAll(pageable);
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
