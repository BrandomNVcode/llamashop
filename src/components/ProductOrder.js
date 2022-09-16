import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateListProduct } from '../redux/features/cart/cartSlice';
import "./css/product-order.css";



export const ProductOrder = ({product}) => {

    const dispatch = useDispatch();

    const [num, setNum] = useState(product.cantidad);


    const handleSumOrder = () => { 
        setNum(num + 1);
    }

    const handleResOrder = () => {
        setNum(num - 1 < 1? 1 : num - 1);
    }

    useEffect(() => {
        dispatch(updateListProduct({...product, cantidad: num}));
    }, [num])
    


    return (
        <div className='product-order-container'>
            <div className='product-order-content-img'>
                <img src={product.image} alt={product.title} className='product-order-img'/>
            </div>
            <div className='product-order-summary'>
                <div className='product-order-caracters'>
                    <span className='product-order-title'>{product.title}</span>
                    <span className='product-order-caracter'>ID: <span>{product.id}</span></span>
                    <span className='product-order-caracter'><span>{product.category}</span></span>
                    <div className='order-cantidad'>
                        <span className='product-order-caracter'>Unidades:</span>
                        <span className='operador-order' onClick={handleResOrder}>-</span>
                        <span className='num-order'>{num}</span>
                        <span className='operador-order' onClick={handleSumOrder}>+</span>
                    </div>
                </div>
                <span className='product-order-price'>S/. {(product.price*num).toFixed(2)}</span>
            </div>
        </div>
    )
}
