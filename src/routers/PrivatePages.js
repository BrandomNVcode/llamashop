import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Home } from '../page/Home';
import { ProductList } from '../page/ProductList';




export const PrivatePages = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/products" element={ <ProductList /> } />
        </Routes>
    )
}
