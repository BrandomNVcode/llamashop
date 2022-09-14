import React from 'react';
import { useDispatch } from 'react-redux';
import { Anuncio } from '../components/Anuncio';
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import { Slider } from '../components/Slider';

import { categoryProduct } from '../redux/features/filter/filterSlice';


export const Home = () => {

  const dispatch = useDispatch();
  dispatch(categoryProduct({category: "all", fromFilter: false}));

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
