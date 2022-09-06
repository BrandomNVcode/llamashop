import React from 'react';
import "./css/product-order.css";



export const ProductOrder = ({url}) => {
    return (
        <div className='product-order-container'>
            <div className='product-order-content-img'>
                <img src={url} className='product-order-img'/>
            </div>
            <div className='product-order-summary'>
                <div className='product-order-caracters'>
                    <span className='product-order-caracter'>Zapatillas Adidas</span>
                    <p className='product-order-caracter'>ID: <span>5484545</span></p>
                    <p className='product-order-caracter'>Talla: <span>M</span></p>
                </div>
                <p className='product-order-price'><span>S/. 159</span></p>
            </div>
        </div>
    )
}
