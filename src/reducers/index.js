import { combineReducers } from "redux";
import restaurant from './restaurant';
import dish from './dish';

export default combineReducers({
    restaurant,
    dish
});