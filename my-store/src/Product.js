import React from 'react'
import './Product.css';
// props
function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            {/* info about the product */}
            <div className="product__info">
    <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* creating an empty array for the rating */}
                    {Array(rating).fill().map((_,i) =>(
                        <p>🌟</p>
                    ) )}
                </div>
            </div>
            <img src={image} alt="lean startup book" />

            <button>Add to cart</button>
        </div>
    )
}

export default Product;
