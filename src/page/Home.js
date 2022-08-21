import React from 'react';
import { Anuncio } from '../components/Anuncio';
import { NavBar } from '../components/NavBar';
import { Slider } from '../components/Slider';


export const Home = () => {
  return (
    <div>
        <Anuncio />
        <NavBar />
        <Slider />
    </div>
  )
}
