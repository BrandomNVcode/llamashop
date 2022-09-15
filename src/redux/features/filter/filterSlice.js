import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  category: "all",
  order: "default",
  fromFilter: false
}



export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    categoryProduct: (state, action) => {
        state.category = action.payload.category;
        state.fromFilter = action.payload.fromFilter;
    },
    orderProduct: (state, action) => {
      state.order = action.payload.order;
      state.fromFilter = action.payload.fromFilter;
  },
  },
})



// Action creators are generated for each case reducer function
export const { categoryProduct, orderProduct } = filterSlice.actions



export default filterSlice.reducer