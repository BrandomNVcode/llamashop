import React from 'react';
import "./css/navbar.css";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';


export const NavBar = () => {
  return (
    <nav className="container">
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
                <div className="menu-items">Register</div>
                <div className="menu-items">Login</div>
                <div className="menu-items">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </div>
            </div>
        </div>
    </nav>
  )
}
