import React, { useEffect, useState } from 'react';
import "./css/products.css";

import { Product } from './Product';
import { getProducts } from '../helpers/products';
import { useSelector } from 'react-redux';



export const Products = () => {

  const { category } = useSelector(state => state.filter);

  const [products, setProducts] = useState([]);

  
  
  useEffect(() => {
    
    const listProducts = async() => {
      let arrProducts = await getProducts();
  
      if(category !== "all") {
        arrProducts = arrProducts.filter(product => product.category === category);
      }
  
      setProducts(arrProducts);
    };
    
    listProducts();

  }, [category]);
  

  return (
    <div className='products-container'>
        {
          products.map((product) => (
            <Product key={product.id} product={product}/>
          ))
        }
    </div>
  )
}
