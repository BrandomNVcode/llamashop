import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  num: 0,
  products: []
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
        state.num = state.num + 1;
        state.products.push(action.payload);
    },
    updateListProduct: (state, action) => {
        state.products = state.products.map(prod => {
            if(prod !== null && prod.id === action.payload.id) {
                return prod = action.payload;
            }
            return prod;
        });
    },
    shopAll: (state) => {
        state.num = 0;
        state.products = [];
    }
  },
})



// Action creators are generated for each case reducer function
export const { addProductToCart, updateListProduct, shopAll } = cartSlice.actions



export default cartSlice.reducer



