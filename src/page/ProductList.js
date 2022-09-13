import React from 'react';
import { useSelector } from 'react-redux';
import "./css/product-list.css";

import { Anuncio } from '../components/Anuncio';
import { Filter } from '../components/Filter';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Products } from '../components/Products';



export const ProductList = () => {


    const { category } = useSelector(state => state.filter);

    let titulo = "Nuestros productos";


    if(category === "men's clothing") {
        titulo = "Para hombres";
    } else if(category === "women's clothing") {
        titulo = "Para mujeres";
    } else if(category === "jewelery") {
        titulo = "Accesorios"
    };


    return (
        <>
            <NavBar />
            <Anuncio />
            <h1 className='product-name-category'>{titulo}</h1>
            <Filter />
            <Products />
            <Footer />
        </>
    )
}
