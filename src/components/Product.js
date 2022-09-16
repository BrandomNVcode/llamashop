import React from 'react';
import "./css/product.css";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
//import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { addProductToCart } from '../redux/features/cart/cartSlice';



export const Product = ({product}) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuth } = useSelector(state => state.auth);


    const handleCart = () => {
        if(isAuth) {
            product.cantidad = 1
            dispatch(addProductToCart(product));
        } else {
            navigate("auth/login");
        }
    }


    return (
        <div className='product-container'>
            <div className='circle'>
            </div>

            <div className='product-price'>
                <span>S/. {product.price}</span>
            </div>
            <img className='img-product' src={product.image} alt='Product'/>
            <div className='product-info'>
                <div className='product-icon' onClick={handleCart}>
                    <ShoppingCartOutlinedIcon />
                </div>
                <div className='product-icon' onClick={() => navigate(`/product/${product.id}`)}>
                    <SearchOutlinedIcon/>
                </div>
                {/**<div className='product-icon'>
                    <FavoriteBorderOutlinedIcon />
                </div>*/}
            </div>
        </div>
    )
}
