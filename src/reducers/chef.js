import { GET_ALL_CHEFS, CHEFS_ERROR } from "../actions/types";

const initialState = {
    chefs: [],
    chef: null,
    loading_c: true,
    errors: {}
};

export default function (state=initialState, action) {
    const { type, payload } = action;
    switch(type){
        case GET_ALL_CHEFS:
            return {
                ...state, 
                chefs: payload,
                loading_c: false
            };
        case CHEFS_ERROR:
            return {
                ...state,
                errors: payload,
                loading_c: false
            };
        default:
            return state;
    }   
}