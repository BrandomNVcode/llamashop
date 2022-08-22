import React from 'react';
import { Anuncio } from '../components/Anuncio';
import { Categories } from '../components/Categories';
import { NavBar } from '../components/NavBar';
import { Slider } from '../components/Slider';


export const Home = () => {
  return (
    <div>
        <Anuncio />
        <NavBar />
        <Slider />
        <Categories />
    </div>
  )
}
