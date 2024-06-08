package com.betastack.betastack.model;

import org.springframework.stereotype.Component;

@Component
public class HomeResponse {
    public String gettotalNoOfProducts() {
        return totalNoOfProducts;
    }

    public void settotalNoOfProducts(String totalNoOfProducts) {
        this.totalNoOfProducts = totalNoOfProducts;
    }

    private String totalNoOfProducts;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
