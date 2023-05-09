import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            // state.cart = state.cart.filter(item => item.name !== action.payload.name)
            state.cart.splice(action.payload, 1)
        }
    }

})
const cartActions = cartSlice.actions;
export {
    cartActions,
}
export default cartSlice;


