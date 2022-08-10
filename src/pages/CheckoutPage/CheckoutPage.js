import React from 'react';
import './CheckoutPage.css';

//Component
import PersonalDetails from '../../components/Checkout/PersonalDetails';
import PaymentDetails from '../../components/Checkout/PaymentDetails';
import OrderInfoPayment from '../../components/Order/OrderInfoPayment';
import Spinner from '../../components/layout/Spinner';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const CheckoutPage = ({ orders, loading }) => {
    let totalPrice = 0;
    return (
        <div className='checkout-container'>
            <div className='details-container'>
                <div></div>
                <PersonalDetails />
                <PaymentDetails />
            </div>
            <div className='order-container'>
                {!orders || orders.length === 0 || loading ? (<Spinner />) : (
                    <OrderInfoPayment key={orders[0]._id} orders={orders} price={orders.reduce((a, v) => a = a + v.dish.price, totalPrice)}/>
                )}
            </div>
        </div>
    )
};

CheckoutPage.propTypes = {
    orders: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    orders: state.order.orders,
    loading: state.order.loading_o
});

export default connect(mapStateToProps, {})(CheckoutPage);