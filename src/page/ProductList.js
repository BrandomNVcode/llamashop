import React from 'react';
import "./css/product-list.css";

import { Anuncio } from '../components/Anuncio';
import { Filter } from '../components/Filter';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Products } from '../components/Products';



export const ProductList = () => {
    return (
        <>
            <NavBar />
            <Anuncio />
            <h1 className='product-name-category'>Zapatillas</h1>
            <Filter />
            <Products />
            <Footer />
        </>
    )
}
