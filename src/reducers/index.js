import { combineReducers } from "redux";
import restaurant from './restaurant';
import dish from './dish';
import chef from './chef';
import order from './order';

export default combineReducers({
    restaurant,
    dish,
    chef,
    order
});