import React from 'react';
import "./css/footer.css";

import GitHubIcon from '@mui/icons-material/GitHub';



export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-container-left'>
                <h1>LLAMAshop.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className='social-media'>
                    <GitHubIcon />
                </div>
            </div>
            <div className='footer-container-center'>
                <h3>Enlace útil</h3>
                <ul>
                    <li>Ropa para mujer</li>
                    <li>Ropa para hombre</li>
                    <li>Zapatillas de tus marcas preferidas</li>
                    <li>Accesorios</li>
                    <li>Promoción verano</li>
                </ul>
            </div>
            <div className='footer-container-right'>
                <h3>Contacto</h3>
                <ul>
                    <li>+51 999 999 999</li>
                    <li>noriegaverab@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}
