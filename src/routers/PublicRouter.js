import React from 'react';
import { Navigate } from 'react-router-dom';



export const PublicRouter = ({ children, isAuth }) => {
    
    //const isAuth = false;

    return (!isAuth)? children : <Navigate to="/" /> 
}
