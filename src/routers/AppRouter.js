import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from '../page/Home';

import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

import { LoginScreen } from '../page/LoginScreen';
import { ProductList } from '../page/ProductList';
import { RegisterScreen } from '../page/RegisterScreen';
import { ShoppingCart } from '../page/ShoppingCart';
import { Product } from '../page/Product';



export const AppRouter = () => {


    const isAuth = false;


    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/product/:id' element={<Product />} />


                <Route path='/auth/*'>

                    <Route path='login' element={
                        <PublicRouter isAuth={isAuth}>
                            <LoginScreen />
                        </PublicRouter>
                    } />

                    <Route path='register' element={
                        <PublicRouter isAuth={isAuth}>
                            <RegisterScreen />
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
