
//const CHANGE_HIDE ='CHANGE_HIDE'
const ADD_WHEELS = 'ADD_WHEELS';
const UPDATE_NEW_WHEELS = 'UPDATE_NEW_WHEELS';
const CHANGE_CART = 'CHANGE_CART';

let initialState={
    wheels:'hgf',

    newWheels:'jngh',

}

const SidebarReducer = (state=initialState, action)=> {
    switch (action.type) {
        case UPDATE_NEW_WHEELS:
            return {
                ...state,
                newWheels: {...action.updateWheel,cart:false, count:0, id:state.wheels.length+1,img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'  }
            }
        case ADD_WHEELS:
            return {
                ...state,
                wheels: [...state.wheels, state.newWheels
                ],
                newWheels: {
                    marka: '',
                    age: '',
                    radius: '',
                    stan: '',
                    price:'',
                    id: '',
                    img:''
                }
            }
        case CHANGE_CART:
            return {
                ...state,
                wheels: state.wheels.map(w=>{
                    if (w.id===action.idWheel){
                        return  {...w, cart: !w.cart, count: !w.cart ? 1: 0 }
                    }
                    return w
                })

            }

        default:
            return state;
    }
}

//export const changehide =() =>({ type: CHANGE_HIDE })

export default SidebarReducer