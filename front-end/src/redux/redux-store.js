import {combineReducers,  createStore} from "redux";
import adminReducer from './admin-reducer';
import wheelReducer from './wheel-reducer';
import cartReducer from './cart-reducer';


let reducers =combineReducers({
    wheeldata:wheelReducer,
    admindata:adminReducer,
    cartdata:cartReducer
})
const store =createStore(reducers)

window.store=store

export default store














window.__store__ = store