import React from 'react';
import "./css/navbar.css";

import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Avatar from '@mui/material/Avatar';
import { startLogout } from '../redux/features/auth/authSlice';


export const NavBar = () => {


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { isAuth } = useSelector(state => state.auth);
    const { num } = useSelector(state => state.cart);



    const handleMenuDrop = () => {
        const claseCSS = document.querySelector("#desplegable");
        //console.log(claseCSS.classList.contains("nav-list-click-0"))
        if(claseCSS.classList.contains("nav-list-click-0")) {
            claseCSS.classList.replace("nav-list-click-0", "nav-list-click-1");
        } else {
            claseCSS.classList.replace("nav-list-click-1", "nav-list-click-0");
        }
    }


    const handleLogout = () => {
        dispatch(startLogout());
        navigate("/");
    }


    return (
        <nav className="container-navbar">
            <div className="wrapper">
                <div className="left">
                    <span className="lan">ES</span>
                    <div className="search-contain">
                        <input className="search-input" placeholder='Buscar..'/>
                        <SearchIcon  className="search-icon"/>
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo" onClick={() => navigate("/") }>LLAMAshop.</h1>
                </div>
                <div className="right">

                    {
                        !isAuth &&
                        <div>
                            <ul className='nav-list-items'>
                                <li className="menu-items">
                                    <Link to='/auth/login'>Login</Link>
                                </li>
                                <li className="menu-items">
                                    <Link to='/auth/register'>Register</Link>
                                </li>
                            </ul>
                        </div>
                    }

                    <div className="menu-items cart-svg" onClick={() => navigate("/shop/cart")}>
                        <Badge badgeContent={isAuth? num : 0} color="primary">
                            <ShoppingCartOutlinedIcon className='shop-cart'/>
                        </Badge>
                    </div>

                    {
                        isAuth &&
                        <div className='auth-avatar'>
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />

                            <ul className='auth-desplegable'>
                                <li className="menu-items" onClick={handleLogout}>Cerrar sesi??n</li>
                            </ul>
                        </div>
                    }

                    {
                        !isAuth &&
                        <div className='menu-icon' onClick={handleMenuDrop}>
                            <MenuOutlinedIcon />
                        </div>
                    }
                </div>

            </div>

            {
                !isAuth &&
                <ul className="nav-list-items-desplegable nav-list-click-0" id="desplegable">
                    <li>
                        <Link to='/auth/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/auth/register'>Register</Link>
                    </li>    
                </ul>
            }
        </nav>
    )
}
