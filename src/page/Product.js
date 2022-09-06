import React from 'react';
import { Anuncio } from '../components/Anuncio';
import { Footer } from '../components/Footer';
import { InfoProduct } from '../components/InfoProduct';
import { NavBar } from '../components/NavBar';


export const Product = () => {
    return (
        <>
            <Anuncio />
            <NavBar />
            <InfoProduct />
            <Footer />
        </>
    )
}
