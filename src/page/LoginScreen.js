import React from 'react';
import "./css/auth.css";

import { Login } from '../components/Login';



export const LoginScreen = () => {
    return (
      <div className='auth-screen-content screen-login'>
        <Login />
      </div>
    )
}
