const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartQuantity: 0,
        total: 0
    },

    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.cartQuantity += 1;
            state.total += action.payload.price * action.payload.qty;
        },
        resetCart: (state) => {
            state.products = [];
            state.total = 0;
            state.cartQuantity = 0;
        }
    }
})

export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;