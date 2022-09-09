import React from 'react';
import "./css/auth.css";


export const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Login start..");
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
        </div>
    )
}
