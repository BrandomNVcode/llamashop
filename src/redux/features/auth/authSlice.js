import { createSlice } from '@reduxjs/toolkit';
import { getUserAuth } from './thunk';






const initialState = {
  isAuth: false,
  loading: false,
  user: null
}



export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLogin: (state) => {
        state.loading = true;
    },
    startLogout: (state) => {
        state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.isAuth = true;
    })
  }
})



// Action creators are generated for each case reducer function
export const { startLogin, startLogout } = counterSlice.actions



export default counterSlice.reducer


