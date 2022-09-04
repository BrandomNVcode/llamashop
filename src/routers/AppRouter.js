import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from '../page/Home';
import { Login } from '../page/Login';
import { ProductList } from '../page/ProductList';
import { Register } from '../page/Register';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { ShoppingCart } from '../page/ShoppingCart';



export const AppRouter = () => {


    const isAuth = true;


    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/products' element={<ProductList />} />


                <Route path='/auth/*'>

                    <Route path='login' element={
                        <PublicRouter isAuth={isAuth}>
                            <Login />
                        </PublicRouter>
                    } />

                    <Route path='register' element={
                        <PublicRouter isAuth={isAuth}>
                            <Register />
                        </PublicRouter>
                    } />

                    <Route path='*' element={<Navigate to='/auth/login'/>}/>

                </Route>


                <Route path='/shop/*'>

                    <Route path='cart' element={
                        <PrivateRouter isAuth={isAuth}>
                            <ShoppingCart />
                        </PrivateRouter>
                    } />


                    <Route path='*' element={<Navigate to='/shop/cart'/>}/>

                </Route>


                <Route path='*' element={<Navigate to='/'/>}/>


            </Routes>    
        </BrowserRouter>
    )
}
