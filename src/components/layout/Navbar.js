import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

import { SetOrder } from '../../context/SetToggleCart';

//Component
// import Orders from '../Orders/Orders';


const Navbar = () => {
    const { toggleOrder, changeToggleOrder } = useContext(SetOrder);
    const history = useNavigate();
    useEffect(() => {
        history('/')
    }, []);
    return (
        <nav className='navbar'>
            <div className='left-side'>
                <div className='logo-main' />
                <h1>
                    <a className='a' href='/'>Epicure</a>
                </h1>
                <h3 className='h3'>
                    <Link className='link' to="/restaurants">Restaurant</Link>
                </h3>
                <h3 className='h3'>
                    <Link className='link' to="/chefs">Chef</Link>
                </h3>
            </div>
            <div className='center'></div>
            
            <div className='right-side'>
            {/* {toggleOrder && <Orders />}     */}
                <div className='logo'>
                    <img className='logo-right' src={require('../../assert/images/Search.png')} alt='logo-search' />
                    <img className='logo-right' src={require('../../assert/images/Profile.png')} alt='logo-profile' />
                    <img className='logo-right' src={require('../../assert/images/Cart.png')} alt='logo-cart' onClick={() => changeToggleOrder(!toggleOrder)} />
                </div>

            </div>
        </nav>
    )
};

export default Navbar;