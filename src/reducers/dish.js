import { GET_TOP_DISHES, DISHES_ERROR, GET_ALL_DISHES, GET_DISH_BY_ID, DELETE_DISH_BY_ID } from "../actions/types";
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
        case GET_DISH_BY_ID:
            return {
                ...state, 
                dish: payload,
                loading_d: false
            }
        case DELETE_DISH_BY_ID:
            return {
                ...state,
                dish: payload,
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