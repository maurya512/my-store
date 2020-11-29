import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ cart, user }, disptach] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                {/* Payment section - delivery address */}
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
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>

                </div>
            </div>
        </div>
    )
}

export default Payment
