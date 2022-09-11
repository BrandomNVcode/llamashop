import { createSlice } from '@reduxjs/toolkit';
import { getUserAuth } from './thunk';






const initialState = {
  isAuth: false,
  loading: false,
  user: null,
  token: null
}



export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLogout: (state) => {
        state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUserAuth.pending, (state, action) => {
      state.loading = true;
      state.isAuth = false;
    })
    .addCase(getUserAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.isAuth = true;
    })
  }
})



// Action creators are generated for each case reducer function
export const { startLogout } = counterSlice.actions



export default counterSlice.reducer


