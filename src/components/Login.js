import React from 'react';
import "./css/auth.css";

import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { getUserAuth } from '../redux/features/auth/thunk';



export const Login = () => {

    const { loading } = useSelector(store => store.auth);

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(getUserAuth());

    }


    return (

        <>

        {

            loading?

            <span>Cargando...</span>

            :

            <div className='auth-content'>
                <div className='img-logo-content'>
                    <div className='img-logo'></div>
                </div>

                <div className='auth-form-content'>
                    <h1 className='title-llamashop'>LLAMAshop.</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="correo">Correo</label>
                        <input type="email" name="correo" id="correo" value="usuario@demo.com" disabled className='input-box'/>

                        <label htmlFor="contracenia">Contraceña</label>
                        <input type="password" name="correo" id="contracenia" value="test123" disabled className='input-box'/>

                        <input type="submit" value="INICIAR SESIÓN" className='btn-auth'/>
                    </form>
                </div>

                <div className='sugestion-auth sugestion-login'>
                    <Link to="/auth/register">
                        <span>Si no tienes una cuenta, puedes crearte una</span>
                    </Link>

                    <Link to="/">
                        <span>Volver al inicio</span>
                    </Link>
                </div>
                
            </div>

        }

        </>
    )
}
