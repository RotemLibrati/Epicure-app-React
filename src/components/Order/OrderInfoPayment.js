import React, { useContext } from 'react';
import './OrderInfoPayment.css';
import { useNavigate } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setOrderHistory, putPaymentTrue } from '../../actions/order';


//Component
import OrderItem from '../../components/Orders/OrderItem';
import { SetOrder } from '../../context/SetToggleCart';

const OrderInfoPayment = ({ orders, price = 0, setOrderHistory, putPaymentTrue }) => {
    const { toggleOrder, changeToggleOrder } = useContext(SetOrder);
    const history = useNavigate();
    const paymentOrder = async () => {
        changeToggleOrder(!toggleOrder);
        await setOrderHistory(orders, price);
        await putPaymentTrue();
        history('/');
    }
    return (
        <div className='order-payment-container'>
            <div className='order-payment-details'>
                <text className='order-payment-title'>Your Order</text>
                <text className='order-payment-rest'>{orders[0].dish.restaurant.name}</text>
                <div className='order-payment-dishes'>
                    {orders.map(order => (
                        <OrderItem key={order._id} dish={order.dish} />
                    ))}
                </div>
            </div>
            <div className='divider' />
            <div className='order-payment-comment'>
                <text className='comment-title'>Add A Comment</text>
                <textarea className='payment-comment-input'
                    type='text'
                    placeholder='Special requests, allergies, detary restrictions, etc.' />
            </div>
            <button className='order-payment-btn-container' onClick={paymentOrder}>
                <div className='order-payment-btn'>
                    <text className='order-payment-btn-text'>Pay</text>
                    <text className='order-payment-btn-text'> ₪ {price}</text>
                </div>
            </button>
        </div>
    )
};

OrderInfoPayment.propTypes = {
    setOrderHistory: PropTypes.func.isRequired,
    putPaymentTrue: PropTypes.func.isRequired
};

export default connect(null, { setOrderHistory, putPaymentTrue })(OrderInfoPayment);