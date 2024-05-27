package com.betastack.betastack.repo;

import com.betastack.betastack.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostsRepo extends JpaRepository<Product, Integer> {

    @Query("SELECT count(p.id) from Posts p")
    int getTotalPostCount();
}
