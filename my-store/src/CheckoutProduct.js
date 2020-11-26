import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
// function will have props
function CheckoutProduct({ id, image, title, price, rating }) {
    // pulls the data from the dataLayer and gets all the items in the cart
    const [{cart} , dispatch] = useStateValue();
    // the function to remove items from the shopping cart
    const removeFromCart = () => {
        // in order to manipulate the cart we need to update the action type
        dispatch({
            type: 'Remove__From__Cart',
            // pass the id so that we can go to that id in the cart and remove that product from the cart once
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            {/* image source will be the image passed in as the prop */}
            <img className='checkoutProduct__image' src={image} alt="" />
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
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </p>
                {/* A button to remove from basket */}
                <button onClick={removeFromCart}> Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
