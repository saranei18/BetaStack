import { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) =>{
  const host = "http://localhost:8080";

  const productsInitial =[];

  const [products, setProducts] = useState(productsInitial);
  const [comments, setcomments] = useState([]);
  

  const getProducts = async () => {
    const response = await fetch(`${host}/api/data/product/1/20`, {
      method:"GET",
      headers:{
        "Content-Type" : "application/json",
        "ngrok-skip-browser-warning" : "1"
      },
    });

    const json = await response.json();

    setProducts(json);
  }

  const getProductComments = async (id) => {
    const response = await fetch(`${host}/api/data/product/comments/${id}`, {
      method:"GET",
      headers:{
        "Content-Type" : "application/json",
        "ngrok-skip-browser-warning" : "1"
      },
    });

    const json = await response.json();

    setcomments(json);
  }

  const updateProductComments = async (comment) => {
    
    
    return 1;
  }
  
  

  return (
    <productContext.Provider value = {{products, getProducts, comments, getProductComments, updateProductComments}}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductState;