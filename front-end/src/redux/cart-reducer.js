const ADD_WHEEL = 'ADD_WHEEL';
const MINUS_WHEEL = 'MINUS_WHEEL';
const CART_CHANGE_CART = 'CART_CHANGE_CART';
const CART_ADD_COUNT = 'CART_ADD_COUNT';
const CART_MINUS_COUNT = 'CART_MINUS_COUNT';


let initialState={
    cartWheel:[],
    countWheel:0
};

const cartReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_WHEEL:

            return {
                ...state,
                cartWheel: [...state.cartWheel, {...action.Wheel, count: 1, cart: true}],
            }
        case MINUS_WHEEL:
                return {
                    ...state, cartWheel:state.cartWheel.filter(w=>w.id!==action.Wheel.id)
                }
        case CART_CHANGE_CART:
            return {
                ...state,
                cartWheel: state.cartWheel.map(w=>{
                    if (w.id===action.idWheel){
                        return  {...w, cart: !w.cart, count: !w.cart ? 1: 0 }
                    }
                    return w
                })

            }
        case CART_ADD_COUNT:
            return {
                ...state,
                cartWheel: state.cartWheel.map(w=>{
                    if (w.id===action.idWheel){
                        return  {...w, count: w.count+1}
                    }
                    return w
                })

            }
        case CART_MINUS_COUNT:
            return {
                ...state,
                cartWheel: state.cartWheel.map(w=>{
                    if (w.id===action.idWheel){
                        if(w.count>0){
                            return  {...w, count: w.count-1}
                        }
                        return w
                    }
                    return w
                })

            }
        default:
            return state;
    }


}
export const  CartminusCount = (idWheel) =>({ type: CART_MINUS_COUNT, idWheel })
export const  CartaddCount = (idWheel) =>({ type: CART_ADD_COUNT, idWheel })
export const  CartchangeCart = (idWheel) =>({ type: CART_CHANGE_CART, idWheel })
export const addWheel = (Wheel) => ({type: ADD_WHEEL, Wheel})
export const minuswheel = (Wheel) => ({type: MINUS_WHEEL, Wheel})
export default cartReducer