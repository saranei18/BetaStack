package com.betastack.betastack.repo;

import com.betastack.betastack.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Products, Integer> {

    @Query("SELECT count(p.id) from Products p")
    int getTotalProductCount();
}
