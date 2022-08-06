import axios from "axios";
import { GET_TOP_DISHES, DISHES_ERROR, GET_ALL_DISHES, GET_DISH_BY_ID, DELETE_DISH_BY_ID } from "./types";

export const getTopDishes = () => async dispatch => {
    try {
        const res = await axios.get("/api/dishes/top");
        dispatch({
            type: GET_TOP_DISHES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISHES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
};
export const getAllDishes = () => async dispatch => {
    try {
        const res = await axios.get('/api/dishes');
        dispatch({
            type: GET_ALL_DISHES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: DISHES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getDishById = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/dishes/${id}`);
        dispatch({
            type: GET_DISH_BY_ID,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: DISHES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const deleteDishFromState = () => dispatch => {
    try {
        dispatch({
            type: DELETE_DISH_BY_ID,
            payload: null
        });
    } catch (err) {
        dispatch({
            type: DISHES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

