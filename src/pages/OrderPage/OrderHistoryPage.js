import React, { useEffect } from 'react';
import './OrderHistoryPage.css';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrdersHistory } from '../../actions/order';

//Component
import OrderItemHistory from '../../components/Order/OrderItemHistory';
import Spinner from '../../components/layout/Spinner';

const OrderHistoryPage = ({ orders, loading, getOrdersHistory }) => {
  useEffect(() => {
    getOrdersHistory();
  }, [getOrdersHistory]);
  return (
    <div className='order-history-container'>
      <text className='order-history-title'>Your Order History</text>
      <div className='order-history-frame'>
        {!orders || loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          orders.map(order => (
            <OrderItemHistory key={order._id} order={order}/>
          )))}
      </div>
    </div>
  )
};

OrderHistoryPage.propTypes = {
  getOrdersHistory: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  orders: state.order.orders_history,
  loading: state.order.loading_o
});

export default connect(mapStateToProps, { getOrdersHistory })(OrderHistoryPage);