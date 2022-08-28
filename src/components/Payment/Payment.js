import React, { useContext } from 'react';
import './Payment.css';

import { SetOrder } from '../../context/SetToggleCart';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Payment = ({ order }) => {
  const { changeConfirmPayment, confirmPayamnt } = useContext(SetOrder);
  let totalPrice = 0;
  return (
    <div className='payment-container'>
      <div className='two-items'>
        <img
          className='x-icon'
          src={require('../../assert/images/Exit.png')}
          alt={require('../../assert/images/Exit.png')}
          onClick={() => changeConfirmPayment(!confirmPayamnt)}
        />
        <div className='payment-box-container'>
          <img src={require('../../assert/images/V.jpg')} alt={require('../../assert/images/V.jpg')} />
          <div className='order-recived'>
            <text className='payment-title'>Order Recived</text>
            <text className='payment-subtitle'>Your food is in process</text>
          </div>
          <div className='payment-time'>
            <text className='first'>Arrive in</text>
            <text className='second'>90:00</text>
            <text className='third'>min</text>
          </div>
          <div className='dish-details-container'>
            {order && order.map(o =>

              <div className='dish-details'>
                <text className='dish-name-payment'>1x {o.dish.name}</text>
                <text className='dish-price-payment'>₪ {o.dish.price}</text>
              </div>
            )}
          </div>
          <text className='payment-total-price'>Total - ₪{order.reduce((a, v) => a = a + v.dish.price, totalPrice)} </text>
        </div>
      </div>
    </div>
  )
};

Payment.propTypes = {
  order: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  order: state.order.orders
});

export default connect(mapStateToProps, {})(Payment);