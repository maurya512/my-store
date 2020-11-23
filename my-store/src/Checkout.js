import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            {/* have two sections for the checkout page */}
            {/* left section of the checkout page */}
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" alt="ad banner" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                        {/* Shopping Cart */}
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
               <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
