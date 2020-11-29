import { Link } from 'react-router-dom';
import axios from './axios';
import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';

function Payment() {
    const [{ cart, user }, disptach] = useStateValue();
    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer


        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?Total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async event => {
        // stripe stuff
        event.preventDefault();
        // only allowed to click the buy now button once
        setProcessing(true);

        // stripe will validate how much we charge the customer
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymetIntent}) => {
            // paymentIntent = payment confirmation
            setSucceded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        }) 
    }

    const handleChange = event => {
        // Liste for changes in the cardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');

    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                {/* Payment section - delivery address */}
                <h1>
                    {/* This shows the number of items in the cart as the h1 tag */}
                    Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3> Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Amazon Ln</p>
                        <p>Amazonville, AZ</p>
                    </div>
                </div>
                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3> Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {/* all the products will be displayed here */}
                        {/* importing checkout component once will give us all of the functionality of the components */}
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
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe payment applications */}
                        {/* CardElement is a built in functionality that can be used to grab and capture the card details */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={'text'}
                                thousandSeperator={true}
                                prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> :"Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                                    {error && <div>{error}</div>}
                        </form>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Payment
