import { SET_NEW_ORDER, ORDER_ERROR } from "../actions/types"
const initialState = {
    orders: [],
    loading_o : true,
    errors : {}
};

export default function(state=initialState, action) {
    const { type, payload } = action;
    switch(type){
        case SET_NEW_ORDER:
            return {
                ...state,
                orders: payload,
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

