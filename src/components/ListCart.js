import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { shopAll } from '../redux/features/cart/cartSlice';
import "./css/list-cart.css";
import { ProductOrder } from './ProductOrder';



export const ListCart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products } = useSelector(state => state.cart);

    const [total, setTotal] = useState(0);

    useEffect(() => {
      
        let price = 0;
        products.forEach(prod => {
            if(prod !== null) {
                price += prod.price*prod.cantidad
            }
        });
        setTotal(price);


    }, [products]);
    
    
    const handlePagar = () => {
        Swal.fire(
            'Compra realizada',
            'Gracias por comprar con nosotros',
            'success'
        );

        dispatch(shopAll());

    }


    return (
        <div className='list-cart-container'>
            <div className='btn-shop-container'>
                <button className='btn-shop-continue' onClick={() => navigate("/products")}>SEGUIR COMPRANDO</button>
            </div>
            <h2 className='list-cart-title'>TÚ BOLSA DE COMPRAS</h2>

            <ul className='list-product-order'>
                {
                    products.length !== 0?

                    products.map(product => (
                        product !== null && 
                        <li className='product-list' key={product.id}>
                            <ProductOrder product={product}/>
                        </li>
                    ))

                    :

                    <span>Aun no añade algun producto a la bolsa.</span>

                }
                {/*<li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2021/10/1-22-600x600.jpg"}/>
                </li>
                <li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2022/06/1-11.jpg"}/>
                </li>
                <li className='product-list'>
                    <ProductOrder url={"https://clux.pe/wp-content/uploads/2021/10/1-22-600x600.jpg"}/>
                </li>*/}
            </ul>
            <div className='cart-total-price'>
                <span className='title-price'>Total:</span>
                <span className='total-price'>S/. {total.toFixed(2)}</span>
            </div>
            <div className='list-cart-pagar'>
                <button className='btn-pagar' onClick={handlePagar} disabled={products.length === 0}>Pagar</button>
            </div>
        </div>
    )
}
