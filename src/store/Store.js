import { combineReducers, createStore } from "redux";
import { countReducer } from "../reducers/Count";
import logger from "redux-logger";
import { applyMiddleware } from 'redux'; 

const rootReducer = combineReducers({
    count:countReducer,

})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;