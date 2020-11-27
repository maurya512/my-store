import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
// props
function Product({id, title, image, price, rating}) {
    const [{ cart }, dispatch] = useStateValue();
    // console.log('this is the cart: ' + cart); 
    const addToCart = () => {
        // dispatch the item to dataLayer
        // how we manipulate the data
        dispatch({
            // when add to cart
            type: 'Add__To__Cart',
            // items to be pushed into the data/layer are the id, title, image, price and ratings are the ones passed in from the props
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
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
            {/* added an onClick to button */}
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product;
