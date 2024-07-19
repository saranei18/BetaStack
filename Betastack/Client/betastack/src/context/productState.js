import { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
  const host = "http://localhost:8080";

  const productsInitial = [];

  const [products, setProducts] = useState(productsInitial);
  const [userProducts, setUserProducts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');
  const [userName, setuserName] = useState('null');


  const login = async (username, password) => {
    try {
      const response = await fetch(`${host}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
        },
        body: JSON.stringify({ username, password })
      });

      const textResponse = await response.text(); // Read response as text

      if (response.ok) {
        // Successful login logic
        console.log("Login successful");
        setuserName(username);
        console.log("Response:", textResponse); // Log the response text
        setToken(textResponse);
        setIsAuthenticated(true);
        // Optionally, you can navigate or perform other actions upon successful login
      } else {
        // Handle error cases based on status code
        console.error(`Login failed with status ${response.status}: ${textResponse}`);
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle network errors or other exceptions
    }
  };

  const addNewComment = async (comment, id) => {
    try {
      const response = await fetch(`${host}/api/data/product/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ comment, id })
      });

      const json = await response.json();

      if(json.status === "success"){
        console.log("Successfully added the comment");
        getProductComments(id);
      }

    } catch (error) {
      console.error("Error during login:", error);
      // Handle network errors or other exceptions
    }
  };

  const signIn = async (username, password) => {
    try {
      const response = await fetch(`${host}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
        },
        body: JSON.stringify({ username, password })
      });

      const textResponse = await response.text(); // Read response as text

      if (response.ok) {
        // Successful login logic
        console.log("SignIn successful");
        login(username, password);
        // Optionally, you can navigate or perform other actions upon successful login
      } else {
        // Handle error cases based on status code
        console.error(`Login failed with status ${response.status}: ${textResponse}`);
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle network errors or other exceptions
    }
  };

  const logout = () => {
    setToken('');
    setIsAuthenticated(false);
  };

  //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5keSIsImlhdCI6MTcxODk4NTg0MiwiZXhwIjoxNzE4OTg3NjQyfQ.HbOkAeUSUPArAcDEv3vElvHWcgmQimiHuiCzE0Mw3Ig
  const getProducts = async () => {
    console.log("getProducts token : ", token);
    const response = await fetch(`${host}/api/data/product/1/20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "1",
        "Authorization": `Bearer ${token}`
      },
    });

    const json = await response.json();

    setProducts(json);
  }

  const updateProducts = async (formData) => {
    try {
      const productData = {
        id:formData.id,
        userid: formData.userid,
        name: formData.name,
        description: formData.description,
        created_time : formData.created_time,
        rating:formData.rating,
        tagline: formData.tagline,
        topics : formData.topics,
        slug: formData.slug,
        website: formData.website,
        reviewsCount: formData.reviewsCount,
        commentsCount:formData.commentsCount
      };

      console.log(productData);

      const response = await fetch(`${host}/api/data/product/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });
  
      const json = await response.json();
  
      if (json.status === "success") {
        console.log("Successfully updated Product");
        getUserProducts();
      }
    } catch (error) {
      console.error("Error during editing:", error);
      // Handle network errors or other exceptions
    }
  }

  const addNewProduct = async (formData) => {
    try {
      const productData = {
        id:formData.id,
        userid: formData.userid,
        name: formData.name,
        description: formData.description,
        created_time : formData.created_time,
        rating:formData.rating,
        tagline: formData.tagline,
        topics : formData.topics,
        slug: formData.slug,
        website: formData.website,
        reviewsCount: formData.reviewsCount,
        commentsCount:formData.commentsCount
      };

      console.log(productData);

      const response = await fetch(`${host}/api/data/product/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });
  
      const json = await response.json();
  
      if (json.status === "success") {
        console.log("Successfully updated Product");
        getUserProducts();
      }
    } catch (error) {
      console.error("Error during editing:", error);
      // Handle network errors or other exceptions
    }
  }

  const deleteProduct = async (formData) => {
    try {
      const productData = {
        id:formData.id,
        userid: formData.userid,
        name: formData.name,
        description: formData.description,
        created_time : formData.created_time,
        rating:formData.rating,
        tagline: formData.tagline,
        topics : formData.topics,
        slug: formData.slug,
        website: formData.website,
        reviewsCount: formData.reviewsCount,
        commentsCount:formData.commentsCount
      };

      console.log(productData);

      const response = await fetch(`${host}/api/data/product/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });
  
      const json = await response.json();
  
      if (json.status === "success") {
        console.log("Successfully deleted Product");
        getUserProducts();
      }
    } catch (error) {
      console.error("Error during editing:", error);
      // Handle network errors or other exceptions
    }
  }

  const getUserProducts = async () => {
    const response = await fetch(`${host}/api/data/product/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "1",
        "Authorization": `Bearer ${token}`
      },
    });

    const json = await response.json();

    setUserProducts(json);
  }


  const getProductComments = async (id) => {
    const response = await fetch(`${host}/api/data/product/comments/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "1",
        "Authorization": `Bearer ${token}`
      },
    });

    const json = await response.json();

    setcomments(json);
  }

  const updateComment = async (commentId, username, comment, totalVotes, id) => {
    try {
      const commentData = {
        commentId: commentId,
        username: username,
        comment: comment,
        totalVotes: totalVotes,
        id: id
      };
  
      commentData.totalVotes = 0; // This ensures totalVotes is set to 0
  
      const response = await fetch(`${host}/api/data/product/comments/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(commentData)
      });
  
      const json = await response.json();
  
      if (json.status === "success") {
        console.log("Successfully edited the comment");
        getProductComments(commentData.id);
      }
  
    } catch (error) {
      console.error("Error during editing:", error);
      // Handle network errors or other exceptions
    }
  };

  const deleteComment = async (commentId, username, comment, totalVotes, id) => {
    try {
      const commentData = {
        commentId: commentId,
        username: username,
        comment: comment,
        totalVotes: totalVotes,
        id: id
      };
  
      commentData.totalVotes = 0; // This ensures totalVotes is set to 0
  
      const response = await fetch(`${host}/api/data/product/comments/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(commentData)
      });
  
      const json = await response.json();
  
      if (json.status === "success") {
        console.log("Successfully deleted the comment");
        getProductComments(commentData.id);
      }
  
    } catch (error) {
      console.error("Error during deleting:", error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <productContext.Provider value={{ deleteProduct, addNewProduct, updateProducts, getUserProducts,deleteComment, updateComment, userProducts, userName, isSignIn, isLogin, signIn, products, getProducts, comments, addNewComment, getProductComments, isAuthenticated, login, logout }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductState;