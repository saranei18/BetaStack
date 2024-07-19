import React, { useContext, useEffect, useRef, useState } from 'react'
import productContext from '../context/productContext';
import MyProductItem from './MyProductItem';

function MyProducts() {
    const context = useContext(productContext);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        context.getUserProducts();
    }, []);

    function getCurrentFormattedTime() {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

        // Adding '000' to milliseconds to simulate microseconds
        const microseconds = milliseconds + '000';

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${microseconds}`;
    }

    const products = context.userProducts;
    const modalButtonRef = useRef(null);
    const modalCloseButtonRef = useRef(null);
    const [formData, setFormData] = useState({
        id: 0,
        userid: 0,
        name: '',
        description: '',
        created_time: '',
        rating: 0,
        tagline: '',
        topics: '',
        slug: '',
        website: '',
        reviewsCount: 0,
        commentsCount: 0
    });
    const handleAddProduct = () => {
        setFormData({
            id: 0,
            userid: 0,
            name: '',
            description: '',
            created_time: '',
            rating: 0,
            tagline: '',
            topics: '',
            slug: '',
            website: '',
            reviewsCount: 0,
            commentsCount: 0
        })
        setShowModal(true);
        setTimeout(() => {
            modalButtonRef.current.click();
        }, 100); // Adjust the delay as needed

    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleNewProduct = () => {
        console.log(formData);
        formData.created_time = getCurrentFormattedTime();
        context.addNewProduct(formData);
        modalCloseButtonRef.current.click();
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="row justify-content-center mb-3" style={{ paddingTop: '10px' }}>
                <div className="col-md-auto">
                    <button
                        onClick={handleAddProduct}
                        className="btn btn-success"
                    >
                        Add Product
                    </button>
                </div>
            </div>
            {products && products.length > 0 ? (
                products.map((product, index) => (
                    <MyProductItem product={product} />
                ))
            ) : (
                <p>No products available</p>
            )}

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={modalButtonRef} style={{ display: 'none' }}>
                Launch demo modal
            </button>

            {showModal && (
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered custom-modal-size-mp modal-dialog-scrollable" style={{ maxWidth: '80%' }} role="document">
                        <div className="modal-content custom-modal-content">
                            <div className="modal-header">
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
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="topics">Category</label>
                                    <input
                                        type="text"
                                        id="topics"
                                        className="form-control"
                                        value={formData.topics}
                                        onChange={handleInputChange}
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
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleNewProduct}>Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default MyProducts