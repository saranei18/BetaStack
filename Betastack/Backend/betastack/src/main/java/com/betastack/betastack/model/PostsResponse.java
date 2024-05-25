package com.betastack.betastack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PostsResponse {
    String status;
    List<PostData> posts;

    @Autowired()
    public PostData postData;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<PostData> getPosts() {
        return posts;
    }

    public void setPosts(List<PostData> posts) {
        this.posts = posts;
    }

    public void setDataForResponse(List<Posts> in_posts, List<PostData> in_postData){

        for(Posts p: in_posts){

            postData.setName(p.getName());
            postData.setDescription(p.getDescription());
            postData.setId(p.getId());
            postData.setTagline(p.getTagline());
            postData.setTopics(p.getTopics());
            postData.setSlug(p.getSlug());
            postData.setWebsite(p.getWebsite());
            postData.setRating(p.getRating());
            postData.setCreated_time(p.getCreated_time());

            in_postData.add(postData);
        }

        setPosts(in_postData);

        System.out.println("PostData list's Size : " + in_postData.size());
    }
}
