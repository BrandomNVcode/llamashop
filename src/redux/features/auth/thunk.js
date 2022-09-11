import { createAsyncThunk } from '@reduxjs/toolkit';




export const getUserAuth = createAsyncThunk(
    'auth/getUserAuth',
    async () => {

        const resp = await fetch('https://fakestoreapi.com/users/1');
        const user = await resp.json();


        const token = "token-demo-llamashop";
        const uid = user.id;

        localStorage.setItem('token', token);
        localStorage.setItem('uid', uid);



        return {user, token};
    }
)





