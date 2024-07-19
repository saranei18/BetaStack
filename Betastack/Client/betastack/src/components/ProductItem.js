import React, { useContext, useEffect, useRef, useState } from 'react'
import '../css/productItem.css'
import { useNavigate } from 'react-router';
import productContext from '../context/productContext';

function ProductItem(props) {
  
  const context = useContext(productContext);
  const comments = context.comments;
  const getProductComments = context.getProductComments;
  const product = props.product;

  const [showModal, setShowModal] = useState(false);
  const [currentComment, setcurrentComment] = useState('');
  const [buttonName, setButtonName] = useState('Comment');
  const [editComment, setEditComment] = useState(null);

  const modalButtonRef = useRef(null);

  if (product.description.length === 0) {
    return null;
  }

  const productItemClick = () => {
    getProductComments(product.id);
    setShowModal(true);
    setTimeout(() => {
      modalButtonRef.current.click();
    }, 100); // Adjust the delay as needed
  };

  const commentEditClick = (event, comment) => {
    event.preventDefault();
    console.log("Clicked Comment Edit");
    setcurrentComment(comment.comment);
    setEditComment(comment);
    setButtonName("Edit");
  };

  const deleteEditClick = (event, delComment) => {
    event.preventDefault();
    console.log("Clicked Comment Delete");
    context.deleteComment(delComment.commentId, delComment.username, delComment.comment, delComment.totalVotes, delComment.id);
  };

  const visitButtonClick = (event) => {
    event.stopPropagation();
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log('Comment submitted:', currentComment);

    if (buttonName === "Edit") {
      console.log("Edit Comment");
      console.log(editComment.id);
      editComment.comment = currentComment;
      editComment.totalVotes = 0;
      context.updateComment(editComment.commentId, editComment.username, editComment.comment, editComment.totalVotes, editComment.id);

      setcurrentComment('');
      setButtonName("Comment");
    }
    else {
      context.addNewComment(currentComment, product.id);
      setcurrentComment(''); // Clear the comment input
      //setShowModal(false);
    }
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
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered custom-modal-size modal-dialog-scrollable" style={{ maxWidth: '80%' }} role="document">
            <div className="modal-content custom-modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>{product.description}</p>
                <p>Rating: {product.rating}</p>
                <a href={product.website} target="_blank" rel="noopener noreferrer">Visit the Product</a>
                <div className="comments-section mt-3">
                  <form onSubmit={handleCommentSubmit} className="d-flex justify-content-center align-items-center">
                    <input
                      type="text"
                      className="form-control me-2"
                      value={currentComment}
                      onChange={(e) => setcurrentComment(e.target.value)}
                      placeholder="Add a comment"
                      style={{ width: '600px' }}
                    />
                    <button type="submit" className="btn btn-success">{buttonName}</button>
                  </form>
                  <br></br>
                  <h6 className='d-flex justify-content-center align-items-center'>Comments</h6>
                  <div className="scrollable-comments">
                    {comments && comments.length > 0 ? (
                      comments.map((comment, index) => (
                        <div className="row d-flex justify-content-center" key={index}>
                          <div className="col-md-8 col-lg-6">
                            <div className="card shadow-0 border" style={{ backgroundColor: '#f0f2f5' }}>
                              <div className="card-body p-4">
                                <div className="card mb-4">
                                  <div className="card-body">
                                    <p>{comment.comment}</p>
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex flex-row align-items-center">
                                        <p className="small mb-0 ms-2">{context.userName === comment.username ? (comment.username + "(You)") : comment.username}</p>
                                      </div>
                                      <div className="d-flex flex-row align-items-center">
                                        <p className="small text-muted mb-0">{comment.totalVotes}</p>
                                        <i className="far fa-thumbs-up mx-2 fa-xs text-body product-itemBt text-primary" style={{ marginTop: '-0.16rem' }} ></i>
                                        {context.userName === comment.username && (
                                          <>
                                            <p className="showcursor small text-muted mb-0" onClick={(event) => commentEditClick(event, comment)}>Edit</p>
                                            <i className="far fa-trash-alt mx-2 fa-xs text-body product-itemBt text-primary showcursor" onClick={(event) => deleteEditClick(event, comment)} style={{ marginTop: '-0.16rem' }}></i>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No Comments available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default ProductItem