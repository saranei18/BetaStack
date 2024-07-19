import React, { useContext, useRef, useState } from 'react'
import productContext from '../context/productContext';

function MyProductItem(props) {
    const context = useContext(productContext);
    const product = props.product;
    const [showModal, setShowModal] = useState(false);
    const [editButton, setEditButton] = useState('EDIT');
    const [formData, setFormData] = useState({
        id:product.id,
        userid: product.userid,
        name: product.name,
        description: product.description,
        created_time: product.created_time,
        rating: product.rating,
        tagline: product.tagline,
        topics: product.topics,
        slug: product.slug,
        website: product.website,
        reviewsCount: product.reviewsCount,
        commentsCount: product.commentsCount
    });

    const modalButtonRef = useRef(null);
    const modalCloseButtonRef = useRef(null);

    if (product === null)
        return null;

    const productItemClick = () => {
        setShowModal(true);
        setTimeout(() => {
            modalButtonRef.current.click();
        }, 100); // Adjust the delay as needed
        console.log(formData);
    };

    

    const closeModal = () => {
        setShowModal(false);
    };

    const enableEditingAll = () => {
        if (editButton === "EDIT") {
            setEditButton("SAVE")
        } else {
            setEditButton("EDIT")
            context.updateProducts(formData);
        }
    }

    const handleDeleteProduct = () => {
        context.deleteProduct(formData);
        modalCloseButtonRef.current.click();
    }   

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const visitButtonClick = (event) => {
        event.stopPropagation();
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
                    <div className="modal-dialog modal-dialog-centered custom-modal-size-mp modal-dialog-scrollable" style={{ maxWidth: '80%' }} role="document">
                        <div className="modal-content custom-modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={modalCloseButtonRef} onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <textarea
                                        id="name"
                                        className="form-control"
                                        rows="1"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        disabled={editButton === 'EDIT'}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tagline">Tagline</label>
                                    <textarea
                                        id="tagline"
                                        className="form-control"
                                        rows="1"
                                        value={formData.tagline}
                                        onChange={handleInputChange}
                                        disabled={editButton === 'EDIT'}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        className="form-control"
                                        rows="3"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        disabled={editButton === 'EDIT'}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        id="category"
                                        className="form-control"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        disabled={editButton === 'EDIT'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        type="text"
                                        id="website"
                                        className="form-control"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        disabled={editButton === 'EDIT'}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={handleDeleteProduct}>Delete Product</button>
                                <button type="button" className="btn btn-primary" onClick={enableEditingAll}>{editButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MyProductItem