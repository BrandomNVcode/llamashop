import React from 'react';
import { Anuncio } from '../components/Anuncio';
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import { Slider } from '../components/Slider';


export const Home = () => {
  return (
    <div>
        <NavBar />
        <Anuncio />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}
