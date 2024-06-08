import React, { useContext, useEffect } from 'react'
import productContext from '../context/productContext'
import ProductItem from './ProductItem';


function Products() {
    const context = useContext(productContext);
    const products = context.products;
    const getProducts = context.getProducts;

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>
        {products && products.length > 0 ? (
                products.map((product, index) => (
                    <ProductItem product = {product}/> 
                ))
            ) : (
                <p>No products available</p>
            )}
    </div>
  )
}

export default Products