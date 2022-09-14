import React, { useEffect, useState } from 'react';
import "./css/products.css";

import { Product } from './Product';
import { getProducts } from '../helpers/products';
import { useSelector } from 'react-redux';



export const Products = () => {

  const { category, order } = useSelector(state => state.filter);

  const [products, setProducts] = useState([]);
  const [defaultProduct, setDefaultProduct] = useState([]);
  
  
  useEffect(() => {
    
    const listProducts = async() => {
      let arrProducts = await getProducts();
  
      setProducts(arrProducts);
      setDefaultProduct(arrProducts);
    };
    
    listProducts();

  }, []);

  useEffect(() => {
    let arrProducts = defaultProduct;

    if(category !== "all") {
      arrProducts = arrProducts.filter(product => product.category === category);
    }

    if(order !== "default") {
      // ordern ascendente
      arrProducts = arrProducts.sort((a, b) => {
        if(a.price === b.price) {
          return 0; 
        }
        if(a.price > b.price) {
          return -1;
        }
        return 1;
      })

      if(order === "asc") {
        setProducts(arrProducts);
      } else {
        setProducts(arrProducts.reverse());
      }

    } else {
      setProducts(arrProducts);
    }



  }, [order, category, setProducts, defaultProduct])
  


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
