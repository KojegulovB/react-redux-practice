import { combineReducers } from "redux";
import { likesReducer } from "./reducer/likesReducer";
import { inputReducer } from "./reducer/inputReducer";
import { commentsReducer } from './reducer/commentsReducer';
import { appReducer } from './reducer/appReducer';

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer
})