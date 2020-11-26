export const initialState = {
    cart: [],
};

// selector
export const getCartTotal = (cart)=> 
    // reduce iterates through the cart and will tally the amount
    // tally's the cart and tally's the price of each added item into the cart and adds it to the total amount, and sets the total amount to 0 initially
    cart?.reduce((amount, item) => item.price + amount, 0);


// takes the state of the application and the action we want to perform
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'Add__To__Cart':
            // reducer is always listening for something to dispatch to the dataLayer
            // returning the original state, but changing what cart currently is and the item added to the cart
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

            default:
                return state;
    }
};

export default reducer;
