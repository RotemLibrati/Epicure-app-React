import { combineReducers } from "redux";
import restaurant from './restaurant';
import dish from './dish';
import chef from './chef';

export default combineReducers({
    restaurant,
    dish,
    chef
});