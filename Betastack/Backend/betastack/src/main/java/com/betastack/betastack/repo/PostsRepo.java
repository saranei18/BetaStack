package com.betastack.betastack.repo;

import com.betastack.betastack.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostsRepo extends JpaRepository<Posts, Integer> {

    @Query("SELECT count(p.id) from Posts p")
    int getTotalPostCount();
}
