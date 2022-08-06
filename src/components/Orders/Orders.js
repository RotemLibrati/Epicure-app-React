import React from 'react';
import './Orders.css';

const Orders = () => {
    return (
        <div className='order-cart'>
            <div className='order-content'>
                <div className='order-cart-icon'>
                    <img src={require('../../assert/images/Cart2.png')} alt="order-cart-icon" />
                </div>
                <div className='order-empty-cart'>Your bag is empty</div>
            </div>
            <button className='order-btn-history'>
                <div className='order-btn-text'>Order History</div>
            </button>
        </div>
    )
};

export default Orders;