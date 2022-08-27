import React from 'react';
import './OrderSummary.css';

//Component
import OrderItem from '../Orders/OrderItem';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { finishOrder } from '../../actions/order';

import { Link } from 'react-router-dom';

const OrderSummary = ({ restaurant, orders, price, finishOrder }) => {
  const onClickOrderAgain = async () => {
    await orders.map(order => finishOrder(order._id));
  }
  return (
    <div className='order-summary-container'>
      <text className='order-summary-title'>Order Summary</text>
      <text className='order-summary-rest'>{restaurant}</text>
      <div className='order-summary-dishes'>
        {orders.map(o => (
          <OrderItem key={o.order._id} dish={o.order.dish} />
        ))}
      </div>
      <div className='order-summary-price'>
        <text className='order-summary-line'></text>
        <text> ₪ {price}</text>
        <text className='order-summary-line'></text>
      </div>
      <div className='order-summary-comment'>
        <text className='summary-comment-title'>Add A Comment</text>
        <textarea className='payment-comment-input'
          type='text'
          placeholder='Special requests, allergies, detary restrictions, etc.' />
      </div>
      <div style={{marginBottom: '15px'}}>
        <Link className='button-checkout' to="/checkout">
          <div className='button-checkout-text'>Order Again</div>
        </Link>
        <Link className='order-btn-history2' to="/orders/history">
          <div className='order-btn-text'>Order History</div>
        </Link>
      </div>
    </div>
  )
};

OrderSummary.propTypes = {
  finishOrder: PropTypes.func.isRequired
}


export default connect(null,{ finishOrder })(OrderSummary);