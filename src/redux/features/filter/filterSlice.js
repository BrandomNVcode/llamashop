import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  category: "all",
  fromFilter: false
}



export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    typeProduct: (state, action) => {
        state.category = action.payload.category;
        state.fromFilter = action.payload.fromFilter;
    }
  },
})



// Action creators are generated for each case reducer function
export const { typeProduct } = filterSlice.actions



export default filterSlice.reducer