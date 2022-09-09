import React from 'react';
import "./css/auth.css";
import { Register } from '../components/Register';


export const RegisterScreen = () => {
    return (
        <div className='auth-screen-content'>
            <Register />
        </div>
    )
}
