import { GET_TOP_DISHES, DISHES_ERROR, GET_ALL_DISHES } from "../actions/types";
const initialState = {
    dishes: [],
    top_dishes: [],
    dish: null,
    loading_d: true,
    errors: {}
};

export default function(state=initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_TOP_DISHES:
            return {
                ...state,
                top_dishes: payload,
                loading_d: false
            }
        case GET_ALL_DISHES:
            return {
                ...state, 
                dishes: payload,
                loading_d: false
            }
        case DISHES_ERROR:
            return {
                ...state,
                errors: payload,
                loading_d: false
            }
        default: 
        return state;
    }
}