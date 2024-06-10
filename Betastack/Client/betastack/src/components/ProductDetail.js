import React from 'react'
import { useLocation } from 'react-router';

function ProductDetail() {
    const { state } = useLocation();
    const { product } = state;

    return (
        <>

        </>
    );
}

export default ProductDetail