package com.betastack.betastack.controller;

import com.betastack.betastack.model.HomeResponse;
import com.betastack.betastack.model.Products;
import com.betastack.betastack.model.ProductResponse;
import com.betastack.betastack.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data/product")
@CrossOrigin(origins="http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService service;
    //To get general details about betaStack
    @GetMapping("/details")
    HomeResponse getBetaStackDetails(){
        System.out.println("Inside getOverallDetails");
        return service.getStackDetails();
    }

    //To Get Product Details in PageSize Limit
    @GetMapping("/{pageno}/{size}")
    List<Products> getProducts(@PathVariable("pageno") int pageNo, @PathVariable("size") int pageSize){
        System.out.println("Getting products for pageNo "+pageNo + " with pageSize : "+pageSize);
        return service.getProductsFromPageNo(pageNo, pageSize);
    }

    @PutMapping("{id}")
    ProductResponse updateProduct(@RequestBody Products product){
        return service.updateProduct(product);
    }

    @DeleteMapping("{id}")
    ProductResponse deleteProduct(@RequestBody Products product){
        return service.deleteProduct(product);
    }

    @GetMapping("/test")
    String sendHelloWorld(){
        return "<b>HelloWorld</b>";
    }
}
