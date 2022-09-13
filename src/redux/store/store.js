import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from "../features/auth/authSlice";
import filterReducer from "../features/filter/filterSlice";
import listenerMiddleware from '../listener/listenerMiddleware';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const rootReducer = combineReducers({
    auth: authReducer,
    filter: filterReducer,
});


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(listenerMiddleware.middleware)
})


