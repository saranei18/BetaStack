package com.betastack.betastack.service;

import com.betastack.betastack.model.HomeResponse;
import com.betastack.betastack.model.ProductData;
import com.betastack.betastack.model.ProductResponse;
import com.betastack.betastack.model.Products;
import com.betastack.betastack.repo.CommentsRepo;
import com.betastack.betastack.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepo pRepo;

    @Autowired
    private CommentsRepo cRepo;

    @Autowired
    private Products product;

    @Autowired
    private ProductResponse productResponse;

    @Autowired
    public HomeResponse homeResponse;

    public List<Products> getProductsFromPageNo(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Products> productsPage = pRepo.findAll(pageable);
        return productsPage.getContent();
    }

    public HomeResponse getStackDetails() {

        try {
            int totalProducts = pRepo.getTotalProductCount();
            System.out.println("TotalProducts " +totalProducts);
            homeResponse.setStatus("success");
            homeResponse.settotalNoOfProducts(String.valueOf(totalProducts));
        } catch (Exception e){
            homeResponse.setStatus("failed");
            System.out.println("getBetaStackDetails Failed due to "+ e.toString());;
        }

        return homeResponse;
    }

    public ProductResponse updateProduct(Products product) {
        this.product = pRepo.save(product);
        if(this.product.getId() != 0 && this.product.getId() == product.getId()){
            productResponse.setStatus("success");
        } else{
            productResponse.setStatus("failed");
        }

        return productResponse;
    }

    public ProductResponse deleteProduct(Products product){
        pRepo.delete(product);

        if(!pRepo.existsById(product.getId())){
            productResponse.setStatus("success");
        } else{
            productResponse.setStatus("failed");
        }

        return productResponse;
    }
}
