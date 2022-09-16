import React from 'react';
import "./css/auth.css";

import { Link } from "react-router-dom";



export const Register = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Register start..");
    }


    return (
        <div className='auth-content'>
            <div className='img-logo-content'>
                <div className='img-logo'></div>
            </div>

            <div className='auth-form-content'>
                <h1 className='title-llamashop'>LLAMAshop.</h1>
                <form onSubmit={handleSubmit}>
                    
                    <label htmlFor="user">Nombre de Usuario</label>
                    <input type="text" name="user" id="user" value="Usuario Demo" disabled className='input-box'/>

                    <label htmlFor="correo">Correo</label>
                    <input type="email" name="correo" id="correo" value="usuario@demo.com" disabled className='input-box'/>

                    <label htmlFor="contracenia">Contraceña</label>
                    <input type="password" name="contracenia" id="contracenia" value="test123" disabled className='input-box'/>

                    <label htmlFor="confirmcontracenia">Confirmar Contraseña</label>
                    <input type="password" name="confirmcontracenia" id="confirmcontracenia" value="test123" disabled className='input-box'/>

                    <input type="submit" value="REGISTRARSE" className='btn-auth'/>
                </form>
            </div>

            <div className='sugestion-auth sugestion-register'>
                <Link to="/auth/login">
                    <span>Si ya tienes una cuenta, ir a iniciar sesión</span>
                </Link>
                <Link to="/">
                    <span>Vover al inicio</span>
                </Link>
            </div>
        </div>
    )
}
