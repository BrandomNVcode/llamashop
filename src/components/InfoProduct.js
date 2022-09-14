import React, { useState } from 'react';
import "./css/info-product.css";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



export const InfoProduct = ({product}) => {


    const [cantidad, setCantidad] = useState(1);

    const handleClickMenos = () => {
        const newCantidad = cantidad - 1;
        newCantidad < 1? setCantidad(1) : setCantidad(newCantidad);
    }

    const handleClickMas = () => {
        setCantidad(cantidad + 1);
    }


    return (
        <div className='info-product-container'>
            <div className='product-info-img'>
                <img src={product.image} alt='...'/>
            </div>
            <div className='info-product'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>

                <span className='precio'>Precio: {product.price} soles c/u</span>

                <div className='product-filter'>
                    {/*<div className='product-filter-select'>
                        <span className='select-title'>Talla:</span>
                        <select>
                            <option selected>S</option>
                            <option>L</option>
                            <option>M</option>
                            <option>X</option>
                            <option>XL</option>
                        </select>
                    </div>*/}
                    <div className='cantidad-producto'>
                        <span className='select-title'>Cantidad:</span>
                        <button onClick={handleClickMenos}>-</button>
                        <span className='candidad'>{cantidad}</span>
                        <button onClick={handleClickMas}>+</button>
                    </div>
                </div>

                <button className='comprar'>
                    <span className='add-to-cart'>Agregar al Carrito</span>
                    <ShoppingCartOutlinedIcon />
                </button>
            </div>
        </div>
    )
}
