import React from 'react';
import "./css/newsletter.css"

import SendIcon from '@mui/icons-material/Send';



export const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <h1 className='newsletter-title'>Prepárate para lucir bien</h1>
        <div className='newsletter-description'>
          Suscríbase para obtener un cupones de descuento y las últimas ofertas de tus marcas preferidas!
        </div>
        <div className='input-container-newsletter'>
            <input placeholder='Email..' className='input-newsletter'/>
            <button className='btn-newsletter'>
                <SendIcon />
            </button>
        </div>

        <div className='llamashop-logo'></div>
    </div>
  )
}
