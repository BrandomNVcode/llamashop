import React from 'react';
import "./css/product.css";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



export const Product = ({product}) => {
  return (
    <div className='product-container'>
        <div className='circle'>
        </div>

        <div className='product-price'>
            <span>S/. {product.price}</span>
        </div>
        <img className='img-product' src={product.image} alt='Product'/>
        <div className='product-info'>
            <div className='product-icon'>
                <ShoppingCartOutlinedIcon />
            </div>
            <div className='product-icon'>
                <SearchOutlinedIcon />
            </div>
            <div className='product-icon'>
                <FavoriteBorderOutlinedIcon />
            </div>
        </div>
    </div>
  )
}
