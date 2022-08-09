import React from 'react';
import './OrderInfo.css';

const OrderInfo = ({ dish: {name, price}}) => {
  return (
    <div className='order-info-frame'>
        <div className='order-info-amount-box'>
            <div className='order-info-amount'>1</div>
        </div>
        <div className='order-info-box'>
            <div>
                <div className='order-info-name'>{name}</div>
                <div className='order-info-price'> ₪ {price}</div>
            </div>
        </div>
    </div>
  )
};

export default OrderInfo;