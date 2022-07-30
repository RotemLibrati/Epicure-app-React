import axios from 'axios';
import { GET_ALL_CHEFS, CHEFS_ERROR } from './types';

export const getAllChefs = () => async dispatch => {
    try{
        const res = await axios.get('/api/chefs');
        dispatch({
            type: GET_ALL_CHEFS,
            payload: res.data
        });
    } catch(err){
        dispatch({
            type: CHEFS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

}