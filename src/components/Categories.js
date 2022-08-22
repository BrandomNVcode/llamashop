import React from 'react';
import { CategoryItem } from './CategoryItem';
import "./css/categories.css";


const items = [
    {
        id: 0,
        title: "Ropa y accesorios",
        img: "clothes.jpg"
    },
    {
        id: 1,
        title: "Zapatillas",
        img: "shotes.jpg"
    },
    {
        id: 2,
        title: "Preparate para el verano",
        img: "sol.jpg"
    }
];


export const Categories = () => {
  return (
    <div className='categoties-content'>
        {
            items.map(item => (
                <CategoryItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}
