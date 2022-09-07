import React from 'react';
import "./css/list-cart.css";
import { ProductOrder } from './ProductOrder';


export const ListCart = () => {
    return (
        <div className='list-cart-container'>
            <div className='btn-shop-container'>
                <button className='btn-shop-continue'>SEGUIR COMPRANDO</button>
            </div>
            <h2 className='list-cart-title'>TÚ BOLSA DE COMPRAS</h2>

            <ul className='list-product-order'>
                <li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2022/06/1-11.jpg"}/>
                </li>
                <li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2021/10/1-22-600x600.jpg"}/>
                </li>
                <li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2022/06/1-11.jpg"}/>
                </li>
                <li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2021/10/1-22-600x600.jpg"}/>
                </li>
            </ul>
            <div className='cart-total-price'>
                <span className='title-price'>Total:</span>
                <span className='total-price'>S/. 1574</span>
            </div>
        </div>
    )
}
