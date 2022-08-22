import React from 'react';
import "./css/category-item.css";


export const CategoryItem = ({item}) => {
  return (
    <div className='category-item-container'>
        <img src={'images/' + item.img} className='img-category'/>
        <div className='category-info'>
            <h1 className='category-title'>{item.title}</h1>
            <button className='shop-category'>Comprar ahora</button>
        </div>
    </div>
  )
}



