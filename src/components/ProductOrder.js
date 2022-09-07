import React, { useState } from 'react';
import "./css/product-order.css";



export const ProductOrder = ({url}) => {

    const [unit, setUnit] = useState(1);
    const price = 159;


    const handleSumOrder = () => {
        setUnit(unit + 1);
    }

    const handleResOrder = () => {
        unit - 1 < 1? setUnit(1) : setUnit(unit - 1);
    }


    return (
        <div className='product-order-container'>
            <div className='product-order-content-img'>
                <img src={url} className='product-order-img'/>
            </div>
            <div className='product-order-summary'>
                <div className='product-order-caracters'>
                    <span className='product-order-title'>Zapatillas Adidas</span>
                    <span className='product-order-caracter'>ID: <span>5484545</span></span>
                    <span className='product-order-caracter'>Talla: <span>M</span></span>
                    <div className='order-cantidad'>
                        <span className='product-order-caracter'>Unidades:</span>
                        <span className='operador-order' onClick={handleResOrder}>-</span>
                        <span className='num-order'>{unit}</span>
                        <span className='operador-order' onClick={handleSumOrder}>+</span>
                    </div>
                </div>
                <span className='product-order-price'>S/. {price*unit}</span>
            </div>
        </div>
    )
}
