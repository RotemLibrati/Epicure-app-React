import React, { useState } from 'react';
import './OrderItemHistory.css';
import Moment from 'react-moment';
import OrderSummary from './OrderSummary';

const OrderItemHistory = ({ order: {_id, restaurant: { name }, price, date, orders } }) => {
  const [orderAgain, setOrderAgain] = useState(false);
  console.log("orders", orders);
  return (
    <React.Fragment>
      {orderAgain && <div className='order-summay'>
        <OrderSummary key={_id} orders={orders} restaurant={name} price={price}/>
      </div> }
      <div className='order-item-history-container'>
        <div className='order-item-history-rest-name'>
          <text>{name}</text>
        </div>
        <div className='order-item-history-date'>
          <Moment format='DD-MM-YYYY HH:mm'>{date}</Moment>
        </div>
        <div className='price-arrow'>
          <text className='order-item-history-price'>₪ {price}</text>
          <img className='arrow-right' src={require('../../assert/images/arrowright.png')} alt="arrow-right" onClick={() => setOrderAgain(!orderAgain)} />
        </div>
      </div>
    </React.Fragment>
  )
};

export default OrderItemHistory;