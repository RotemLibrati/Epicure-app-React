import axios from "axios";
import { GET_TOP_DISHES, DISHES_ERROR } from "./types";

export const getTopDishes = () => async dispatch => {
    try {
        const res = await axios.get("/api/dishes/top");
        dispatch({
            type: GET_TOP_DISHES,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type: DISHES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}