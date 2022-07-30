import axios from "axios";
import { GET_TOP_RESTAURANTS, RESTAURANT_ERROR, GET_RESTAURANTS_BY_CHEF, GET_ALL_RESTAURANTS } from "./types";

//Get top restaurants
export const getTopRestaurants = () => async dispatch => {
    try {
        const res = await axios.get('/api/restaurants/top');
        dispatch({
            type: GET_TOP_RESTAURANTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getRestaurantsByChefId = (id) => async dispatch => {
    console.log("id", id);
    try {
        const res = await axios.get(`/api/restaurants/chef/${id}`);
        dispatch({
            type: GET_RESTAURANTS_BY_CHEF,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getAllRestaurants = () => async dispatch => {
    try {
        const res = await axios.get('/api/restaurants');
        dispatch({
            type: GET_ALL_RESTAURANTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}