import React from 'react';
import "./css/product.css";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



export const Product = () => {
  return (
    <div className='product-container'>
        <div className='circle'>
        </div>
        <img className='img-product' src='https://imagenes.elpais.com/resizer/bXFffAf1nj3tDm421MnmfBjm65Q=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/X2RJDY3PHJESXOFINK5TVV22II.jpg' alt='Product'/>
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
