import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='left-side'>
                <div className='logo-main' />
                <h1>
                    <a className='a' href='/#'>Epicure</a>
                </h1>
                <h3 className='h3'>
                    <Link className='link' to="/">Restaurant</Link>
                </h3>
                <h3 className='h3'>
                    <Link className='link' to="/">Chef</Link>
                </h3>
            </div>
            <div className='center'></div>
            <div className='right-side'>
                <div className='logo'>
                    <img className='logo-right' src={require('../../assert/images/Search.png')} alt='logo-search' />
                    <img className='logo-right' src={require('../../assert/images/Profile.png')} alt='logo-profile' />
                    <img className='logo-right' src={require('../../assert/images/Cart.png')} alt='logo-cart' />
                </div>

            </div>
        </nav>
    )
};

export default Navbar;