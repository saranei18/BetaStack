import React from 'react'
import '../css/productItem.css'

function ProductItem(props) {
  const product = props.product;
  //https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png
  /**
   * 
    ---------------

    <h5 className="card-title">{product.name} - {product.tagline}</h5>
            <p className="card-text">{product.description.length === 0 ? product.tagline : (product.description.length < 50 ? product.description : (product.description.substring(0,50) + "..."))}</p>
            <a href="#" className="btn btn-primary">Visit the Product</a>
   */
  
  if (product.description.length === 0) {
    return null;
  }


  return (
    <div className='container my-3 product-itemBt'>
      <div className='col-md-10'>
        <div className="card">
          <div className="card-header">
            <div className="product-item">
              <img src={"https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png"} alt={product.name} className="product-image" />
              <div className="product-info">
                <h5 className="product-title">
                  {product.name} - <span className="product-tagline">{product.tagline}</span>
                </h5>
                <div className="product-categories">
                  <span className="product-description">{product.description.length === 0 ? "--" : (product.description.length < 100 ? product.description : product.description.substring(0, 100) + "...")}</span>
                </div>
              </div>
              <div className="product-rating">
                <span className="star">&#9733;</span> {product.rating}
              </div>
            </div>
            <div className='visit-btn'>
              <a href={product.website} className="btn btn-primary">Visit the Product</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem