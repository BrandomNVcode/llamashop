import React, { useState } from 'react';
import "./css/info-product.css";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



export const InfoProduct = () => {


    const [cantidad, setCantidad] = useState(0);

    const handleClickMenos = () => {
        const newCantidad = cantidad - 1;
        newCantidad < 0? setCantidad(0) : setCantidad(newCantidad);
    }

    const handleClickMas = () => {
        setCantidad(cantidad + 1);
    }


    return (
        <div className='info-product-container'>
            <div className='product-info-img'>
                <img src='https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png' />
            </div>
            <div className='info-product'>
                <h2>Camisa de verano</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                    ultricies ligula a aliquam tellus ante dictum nulla, quisque 
                    tincidunt habitasse etiam magna lacus. Cras odio quam habitant 
                    aenean integer feugiat laoreet bibendum maecenas facilisis convallis, 
                    ridiculus ultrices justo hendrerit suspendisse penatibus molestie quisque 
                    nunc viverra, egestas praesent porttitor consequat mus nascetur volutpat rutrum 
                    turpis pulvinar. Cras enim duis posuere ultrices quisque nostra curabitur 
                    ultricies, nisi neque justo non diam nec habitant est porttitor, a phasellus 
                    felis proin velit accumsan aliquam.</p>

                <span className='precio'>Precio: 49 soles</span>

                <div className='product-filter'>
                    <div className='product-filter-select'>
                        <span className='select-title'>Talla:</span>
                        <select>
                            <option selected>S</option>
                            <option>L</option>
                            <option>M</option>
                            <option>X</option>
                            <option>XL</option>
                        </select>
                    </div>
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
