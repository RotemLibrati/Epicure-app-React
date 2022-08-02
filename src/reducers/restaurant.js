import { GET_TOP_RESTAURANTS, RESTAURANT_ERROR, GET_RESTAURANTS_BY_CHEF, GET_ALL_RESTAURANTS, GET_RESTAURANT_BY_ID } from "../actions/types";

const initialState = {
    restaurants: [],
    top_restaurants: [],
    restaurants_of_chef: [],
    restaurant: null,
    loading_r: true,
    errors: {}
};

export default function (state=initialState, action) {
    const { type, payload } = action;

    switch(type){
        case GET_TOP_RESTAURANTS:
            return {
                ...state,
                top_restaurants: payload,
                loading_r: false
            }
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                restaurants: payload,
                loading_r: false
            }
        case GET_RESTAURANT_BY_ID:
            return {
                ...state,
                restaurant: payload,
                loading_r: false
            }
        case GET_RESTAURANTS_BY_CHEF:
            return {
                ...state,
                restaurants_of_chef: payload,
                loading_r: false
            }
        case RESTAURANT_ERROR:
            return {
                ...state,
                errors: payload,
                loading_r: false
            }
        default:
            return state;
    }
}