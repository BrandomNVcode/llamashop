import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice";
import listenerMiddleware from '../listener/listenerMiddleware';



export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})


