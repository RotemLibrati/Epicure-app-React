import { SET_NEW_ORDER, ORDER_ERROR, GET_NO_PAYMENT_ORDERS, GET_ORDER_HISTORY, SET_ORDER_HISTORY, PUT_PAYMENT_TRUE } from "../actions/types"
const initialState = {
    orders: [],
    orders_history: [],
    loading_o: true,
    errors: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_NEW_ORDER:
            return {
                ...state,
                loading_o: false
            }
        case GET_NO_PAYMENT_ORDERS:
            return {
                ...state,
                orders: payload,
                loading_o: false
            }
        case GET_ORDER_HISTORY:
            return {
                ...state,
                orders_history: payload,
                loading_o: false
            }
        case SET_ORDER_HISTORY:
            return {
                ...state,
                loading_o: false
            }
        case PUT_PAYMENT_TRUE:
            return {
                ...state,
                orders: [],
                loading_o: false
            }
        case ORDER_ERROR:
            return {
                ...state,
                errors: payload,
                loading_o: false
            }
        default:
            return state;
    }
}

