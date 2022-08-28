import React from 'react';
import "./css/navbar.css";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


export const NavBar = () => {


    const handleMenuDrop = () => {
        const claseCSS = document.querySelector("#desplegable");
        //console.log(claseCSS.classList.contains("nav-list-click-0"))
        if(claseCSS.classList.contains("nav-list-click-0")) {
            claseCSS.classList.replace("nav-list-click-0", "nav-list-click-1");
        } else {
            claseCSS.classList.replace("nav-list-click-1", "nav-list-click-0");
        }
    }


    return (
        <nav className="container-navbar">
            <div className="wrapper">
                <div className="left">
                    <span className="lan">ES</span>
                    <div className="search-contain">
                        <input className="search-input"/>
                        <SearchIcon  className="search-icon"/>
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">LLAMAshop.</h1>
                </div>
                <div className="right">
                    <div>
                        <ul className='nav-list-items'>
                            <li className="menu-items">Register</li>
                            <li className="menu-items">Login</li>
                        </ul>
                    </div>
                    <div className="menu-items">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon className='shop-cart'/>
                        </Badge>
                    </div>
                    <div className='menu-icon' onClick={handleMenuDrop}>
                        <MenuOutlinedIcon />
                    </div>
                </div>
            </div>
            <ul className='nav-list-items-desplegable nav-list-click-0' id="desplegable">
                <li>Register</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}
