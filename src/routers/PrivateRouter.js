import React from 'react';
import { Navigate } from 'react-router-dom';



export const PrivateRouter = ({children, isAuth}) => {

    //const isAuth = false;

    return (isAuth)? children : <Navigate to="/auth/login" /> 
}
