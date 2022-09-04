import React from 'react';
import "./css/filter.css";



export const Filter = () => {
    return (
        <div className='filter-container'>
            <div className='filter'>
                <span>Productos:</span>
                <select className='select-product'>
                    <option defaultChecked>Marca</option>
                    <option>Adidas</option>
                    <option>Nike</option>
                    <option>Puma</option>
                </select>
                <select className='select-product'>
                    <option defaultChecked>Talla</option>
                    <option>S</option>
                    <option>XL</option>
                    <option>X</option>
                </select>
            </div>
            <div className='filter'>
                <span>Ordenar:</span>
                <select className='select-product'>
                    <option defaultChecked>Recomendado</option>
                    <option>Mayor Precio</option>
                    <option>Menor Precio</option>
                </select>
            </div>
        </div>
    )
}
