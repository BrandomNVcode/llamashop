import React from 'react';
import "./css/newsletter.css"

import SendIcon from '@mui/icons-material/Send';



export const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <h1 className='newsletter-title'>Newsletter</h1>
        <div className='newsletter-description'>
            
        </div>
        <div className='input-container-newsletter'>
            <input placeholder='Email..'/>
            <button>
                <SendIcon />
            </button>
        </div>
    </div>
  )
}
