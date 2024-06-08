import { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) =>{
  const host = "http://localhost:8080";

  const productsInitial =[];

  const [products, setProducts] = useState(productsInitial);

  const getProducts = async () => {
    const response = await fetch(`${host}/api/data/product/2/10`, {
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      },
    });

    const json = await response.json();

    setProducts(json);
  }

  return (
    <productContext.Provider value = {{products, getProducts}}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductState;