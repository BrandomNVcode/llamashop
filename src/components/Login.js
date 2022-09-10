import React from 'react';
import "./css/auth.css";

import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import { startLogin } from '../redux/features/auth/authSlice';



export const Login = () => {

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(startLogin());
    }


    return (
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
            </div>
            
        </div>
    )
}
