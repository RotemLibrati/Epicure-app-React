import React from 'react';
import './OrderItem.css';

//Component
import OrderInfo from '../Order/OrderInfo';
const OrderItem = ({ dish }) => {
    return (
        <div className='order-item-frame'>
            <img className='order-item-img' src={dish.image} alt={dish.image} />
            <div className='order-item-info'>
                <OrderInfo key={dish._id} dish={dish}/>
                <div className='order-item-info-side'>White bread | Less spicy</div>
                <div className='order-item-info-price-frame'>
                    <div className='order-item-info-price'> ₪ {dish.price}</div>
                </div>
            </div>
        </div>
    )
};

export default OrderItem;