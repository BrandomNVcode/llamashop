import React from 'react';

import { Anuncio } from '../components/Anuncio';
import { Footer } from '../components/Footer';
import { ListCart } from '../components/ListCart';
import { NavBar } from '../components/NavBar';



export const ShoppingCart = () => {
    return (
        <>
            <NavBar />
            <Anuncio />
            <ListCart />
            <Footer />
        </>
    )
}
