import {applyMiddleware, combineReducers, createStore} from "redux";
import adminReducer from './admin-reducer';
import wheelReducer from './wheel-reducer';
import cartReducer from './cart-reducer';
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"

let reducers =combineReducers({
    wheeldata:wheelReducer,
    admindata:adminReducer,
    cartdata:cartReducer,
    auth:authReducer
})
const store =createStore(reducers, applyMiddleware(thunkMiddleware))

window.store=store

export default store














window.__store__ = store