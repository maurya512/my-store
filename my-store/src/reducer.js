export const initialState = {
    cart: [],
};

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
