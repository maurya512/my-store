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
        
        case 'Remove__From__Cart':
            // since reducer is always listening for something to dispatch something to/from the dataLayer
            // goes through all of the items in the cart and finds the first item with the id of the item
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            // create a newCart that has the current items in the cart
            let newCart = [...state.cart];

            // check if the index is >= 0 which means that the item matching was found
            if (index >= 0) {
                // go to the new Cart and splice and delete the element with the found id
                newCart.splice(index, 1);
            }
              
            // else give an error message to the world
            else {
                console.warn(`Can't remove product (id: ${action.id}) as its not in cart`);
            }

            return {
             ...state,
             cart: newCart   
            }
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

            default:
                return state;
    }
};

export default reducer;
