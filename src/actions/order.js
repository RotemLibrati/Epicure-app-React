import axios from "axios";
import { SET_NEW_ORDER, ORDER_ERROR, GET_NO_PAYMENT_ORDERS, GET_ORDER_HISTORY, SET_ORDER_HISTORY, PUT_PAYMENT_TRUE } from "./types";

export const finishOrder = order => async dispatch => {
    try {
        const formData = {
            dish: order._id,
        }
        const res = await axios.post('/api/orders', formData);
        dispatch({
            type: SET_NEW_ORDER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getOrdersForPayment = () => async dispatch => {
    try {
        const res = await axios.get('/api/orders/payment');
        dispatch({
            type: GET_NO_PAYMENT_ORDERS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getOrdersHistory = () => async dispatch => {
    try {
        const res = await axios.get('/api/orders-history');
        dispatch({
            type: GET_ORDER_HISTORY,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const setOrderHistory = (orders, price) => async dispatch => {
    const oredersId = [];
    orders.map(order => oredersId.push({"order": order._id}));
    const formData = {
        "orders": oredersId,
        "price": price,
        "restaurant": orders[0].dish.restaurant._id
    };
    try {
        const res = await axios.post('/api/orders-history', formData);
        dispatch({
            type: SET_ORDER_HISTORY,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const putPaymentTrue = () => async dispatch => {
    try {
        const res = await axios.put('/api/orders/payment');
        dispatch({
            type: PUT_PAYMENT_TRUE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};