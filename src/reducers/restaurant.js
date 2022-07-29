import { GET_TOP_RESTAURANTS, RESTAURANT_ERROR } from "../actions/types";

const initialState = {
    restaurants: [],
    top_restaurants: [],
    restaurant: null,
    loading: true,
    errors: {}
};

export default function (state=initialState, action) {
    const { type, payload } = action;

    switch(type){
        case GET_TOP_RESTAURANTS:
            return {
                ...state,
                top_restaurants: payload,
                loading: false
            }
        case RESTAURANT_ERROR:
            return {
                ...state,
                errors: payload,
                loading: false

            }
        default:
            return state;
    }
}