import React, { useEffect } from 'react';
import './Orders.css';
import { Link } from 'react-router-dom';

//Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrdersForPayment } from '../../actions/order';

//Component
import OrderItem from './OrderItem';


const Orders = ({ order: { orders, loading_o }, getOrdersForPayment }) => {
    let totalPrice = 0;
    useEffect(() => {
        getOrdersForPayment();
    }, [getOrdersForPayment]);
    return (
        !orders || orders.length === 0 ? (
            <div className='order-cart'>
                <div className='order-content'>
                    <div className='order-cart-icon'>
                        <img src={require('../../assert/images/Cart2.png')} alt="order-cart-icon" />
                    </div>
                    <div className='order-empty-cart'>Your bag is empty</div>
                </div>
                <Link className='order-btn-history' to="/orders/history">
                    <div className='order-btn-text'>Order History</div>
                </Link>
            </div>
        ) : (
            <div className='order-cart-dishes'>
                <div className='order-content-dishes'>
                    <div className='group-161'>
                        <div className='group-161-title'>Your Order</div>
                        <div className='group-161-restaurant-name'>{orders[0]?.dish.restaurant.name}</div>
                        <div className='group-161-dishes'>
                            {orders.map(order => (
                                <OrderItem key={order._id} dish={order.dish} />
                            ))}
                        </div>
                        <div className='total-price-frame'>
                            <div className='total-price-line'>{ }</div>
                            <div className='total-price'> ₪ {orders.reduce((a, v) => a = a + v.dish.price, totalPrice)}</div>
                            <div className='total-price-line'></div>
                        </div>
                        <div className='group-162'>
                            <text className='comment'>Add A Comment</text>
                            <textarea className='comment-input'
                                type='text'
                                placeholder='Special requests, allergies, detary restrictions, etc.' />
                        </div>
                        <Link className='button-checkout' to="/checkout">
                            <div className='button-checkout-text'>Checkout</div>
                        </Link>
                        <Link className='order-btn-history2' to="/orders/history">
                            <div className='order-btn-text'>Order History</div>
                        </Link>
                    </div>
                </div>
            </div>
        )


    )
};

Orders.propTypes = {
    getOrdersForPayment: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    order: state.order
});

export default connect(mapStateToProps, { getOrdersForPayment })(Orders);