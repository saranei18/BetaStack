import React, { useEffect, useRef, useState } from 'react'
import '../css/productItem.css'
import { useNavigate } from 'react-router';

function ProductItem(props) {
  const product = props.product;
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();
  const modalButtonRef = useRef(null);

  if (product.description.length === 0) {
    return null;
  }

  const productItemClick = () => {
    setShowModal(true);
    setTimeout(() => {
      modalButtonRef.current.click();
    }, 100); // Adjust the delay as needed
  };

  const visitButtonClick = (event) => {
    event.stopPropagation();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='container my-3 product-itemBt' onClick={productItemClick}>
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
                <a href={product.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={visitButtonClick}>Visit the Product</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={modalButtonRef} style={{ display: 'none' }}>
        Launch demo modal
      </button>

      {showModal && (
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog modal-dialog-centered custom-modal-size" role="document">
         <div className="modal-content custom-modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
           </div>
           <div className="modal-body">
             <p>{product.description}</p>
             <p>Rating: {product.rating}</p>
             <a href={product.website} target="_blank" rel="noopener noreferrer">Visit the Product</a>
           </div>
         </div>
       </div>
     </div>
      )}
    </>
  )
}

export default ProductItem