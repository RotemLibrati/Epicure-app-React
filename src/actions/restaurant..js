import axios from "axios";
import { GET_TOP_RESTAURANTS, RESTAURANT_ERROR } from "./types";

//Get top restaurants
export const getTopRestaurants = () => async dispatch => {
    try{
        const res = await axios.get('/api/restaurants/top');
        dispatch({
            type: GET_TOP_RESTAURANTS,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type: RESTAURANT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}