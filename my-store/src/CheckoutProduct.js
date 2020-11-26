import React from 'react'
import './CheckoutProduct.css'
// function will have props
function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className="checkoutProduct">
            {/* image source will be the image passed in as the prop */}
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                {/* p tag for product title */}
                <p className='checkoutProduct__title'>{title}</p>
                {/* p tag for product price */}
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p 
                className='checkoutProduct__rating'>
                    {/* creates an array of ratings' input and fills it with empty input, and then maps through it ratings number of times */}
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                       <p>🌟</p>
                    ))}
                </p>
            </div>
            {/* A button to remove from basket */}
            <button> Remove from cart</button>
        </div>
    )
}

export default CheckoutProduct
