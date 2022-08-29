import React from 'react';
import "./css/products.css";
import { Product } from './Product';



export const Products = () => {
  return (
    <div className='products-container'>
        <Product key={1}/>
        <Product key={2}/>
        <Product key={3}/>
        <Product key={4}/>
        <Product key={5}/>
        <Product key={6}/>
        <Product key={7}/>
        <Product key={8}/>
        <Product key={9}/>
        <Product key={10}/>
        <Product key={11}/>
    </div>
  )
}
