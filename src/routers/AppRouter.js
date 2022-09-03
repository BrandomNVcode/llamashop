import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../page/Home';
import { ProductList } from '../page/ProductList';



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>    
        </BrowserRouter>
    )
}
