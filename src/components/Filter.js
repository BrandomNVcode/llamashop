import React from 'react';
import { useDispatch } from 'react-redux';
import { typeProduct } from '../redux/features/filter/filterSlice';
import "./css/filter.css";



export const Filter = () => {


    const dispatch = useDispatch();


    const handleCategory = (e) => {
        dispatch(typeProduct({category: e.target.value, fromFilter: true}));
    }


    return (
        <div className='filter-container'>
            <div className='filter'>
                <span>Productos:</span>
                <select className='select-product' onChange={handleCategory}>
                    <option defaultChecked key={"0"} value={"all"}>Todas las categorias</option>
                    <option key={"1"} value={"men's clothing"}>Hombre</option>
                    <option key={"2"} value={"women's clothing"}>Mujer</option>
                    <option key={"3"} value={"jewelery"}>Accesorios</option>
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
