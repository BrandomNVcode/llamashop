import React from 'react';
import "./css/auth.css";


export const Login = () => {
    return (
        <div className='login-content'>
            <div className='img-logo-content'>
                <div className='img-logo'></div>
            </div>
            <div className='login-form-content'>
                <form>
                    <label for="correo">Correo</label>
                    <input type="email" name="correo" id="correo" value="usuario@demo.com" disabled/>

                    <label for="contracenia">Contraceña</label>
                    <input type="password" name="correo" id="contracenia" value="test123" disabled/>
                </form>
            </div>
        </div>
    )
}
