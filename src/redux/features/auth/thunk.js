import { createAsyncThunk } from '@reduxjs/toolkit';




export const getUserAuth = createAsyncThunk(
    'auth/getUserAuth',
    async () => {

        const resp = await fetch('https://fakestoreapi.com/users/1');
        const user = await resp.json();

        console.log(user);
        return user;
    }
)





