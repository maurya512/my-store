import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
// import { auth } from './firebase'; 

function Checkout() {

    // pulls the cart from the dataLayer
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            {/* have two sections for the checkout page */}
            {/* left section of the checkout page */}
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" alt="ad banner" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {/* <h3>Hello, {user.email}</h3> */}
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
