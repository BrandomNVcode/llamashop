import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Anuncio } from '../components/Anuncio';
import { Footer } from '../components/Footer';
import { InfoProduct } from '../components/InfoProduct';
import { NavBar } from '../components/NavBar';
import { getSingleProduct } from '../helpers/products';



export const Product = () => {

    
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
      
        getSingleProduct(id)
            .then(resp => setProduct(resp))
            .catch(err => navigate("/"));

    }, [setProduct, id, navigate]);



    return (
        <>
            <NavBar />
            <Anuncio />
            <InfoProduct product={product}/>
            <Footer />
        </>
    )
}
