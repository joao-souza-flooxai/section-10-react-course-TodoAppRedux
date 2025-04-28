import { combineReducers } from "redux";
import reducer  from "../todo/todoReducer";
const rootReducer = combineReducers({
    todo: reducer
});

export default rootReducer

