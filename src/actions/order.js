import axios from "axios";
import { SET_NEW_ORDER, ORDER_ERROR, GET_NO_PAYMENT_ORDERS } from "./types";

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
        const res = await axios.get('/api/orders');
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