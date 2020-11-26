import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* pulling from the cart and displaying the number of items in the cart */}
            Subtotal ({cart.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                    This order contains a gift
                </small>
                    </>
                )}
                // goes to 2 decimal places
                decimalScale={2}
                // amount getting passed
                value={getCartTotal(cart)}
                displayType={"text"}
                // separates the currency into readable format
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal
