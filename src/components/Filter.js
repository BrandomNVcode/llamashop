import React from 'react';
import { useDispatch } from 'react-redux';
import { categoryProduct, orderProduct } from '../redux/features/filter/filterSlice';
import "./css/filter.css";



export const Filter = () => {


    const dispatch = useDispatch();


    const handleCategory = (e) => {
        dispatch(categoryProduct({category: e.target.value, fromFilter: true}));
    }

    const handleOrder = (e) => {
        dispatch(orderProduct({order: e.target.value, fromFilter: true}));
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
            </div>
            <div className='filter'>
                <span>Ordenar:</span>
                <select className='select-product' onChange={handleOrder}>
                    <option defaultChecked key={"1"} value={"default"}>Recomendado</option>
                    <option key={"2"} value={"asc"}>Mayor Precio</option>
                    <option key={"3"} value={"des"}>Menor Precio</option>
                </select>
            </div>
        </div>
    )
}
