package com.betastack.betastack.repo;

import com.betastack.betastack.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepo extends JpaRepository<Posts, Integer> {
}
