import {WheelAPI} from "../api/api";


const ADD_WHEELS = 'ADD_WHEELS';
const UPDATE_NEW_WHEELS = 'UPDATE_NEW_WHEELS';
const CHANGE_CART = 'CHANGE_CART';
 const ADD_COUNT = 'ADD_COUNT';
const MINUS_COUNT = 'MINUS_COUNT';
const SEARCH_WHEEL ='SEARCH_WHEEL';
const TO_UP ='TO_UP'
const TO_LOW = "TO_LOW"
const SHOW_RADIUS = 'SHOW_RADIUS'
const  SET_WHEELS = 'SET_WHEELS'
const IS_FETCHING = 'IS_FETCHING'
const GET_WHEEL ='GET_WHEEL'

let initialState={
    wheels:[],
    newWheels:{
        marka: 'marka',
        age:'age',
        radius:'radius',
        stan: 'stan',
        price: 'price'

    },
    wheelsCopy:[],
    wheelsCopy0:[],
    isFetching:false,
    currentWheel:[]
}

const wheelReducer = (state=initialState, action)=> {
    switch (action.type) {
        case GET_WHEEL:
            return {
                ...state,
                currentWheel: [action.body]
            }
        case UPDATE_NEW_WHEELS:
            return {
                ...state,
                newWheels: {...action.updateWheel,cart:false, count:0, id:state.wheels.length+1,img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'  }
            }
        case ADD_WHEELS:
            return {
                ...state,
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
        case ADD_COUNT:
            return {
                ...state,
                wheels: state.wheels.map(w=>{
                    if (w.id===action.idWheel){
                        return  {...w, count: w.count+1}
                    }
                    return w
                })

            }
        case MINUS_COUNT:
            return {
                ...state,
                wheels: state.wheels.map(w=>{
                    if (w.id===action.idWheel){
                        if(w.count>0){
                            return  {...w, count: w.count-1}
                        }
                        return w
                    }
                    return w
                })

            }
        case SEARCH_WHEEL:
            let arr = action.text !==''? state.wheels.map(w=>{
                if (w.marka.toUpperCase().search(action.text.toUpperCase()) === -1) {
                return {...w, hide:true }}
                else return {...w, hide:false } }) : state.wheels.map(w=>{return {...w, hide:false }})
            return {
                ...state,
                wheels: arr
               //      state.wheels.map(w=>{
               //     let flag = w.marka===action.text
               //
               //      return {...w, hide: flag ? false: true }
               // })

            }
        case TO_UP:
            let arr0 =[...state.wheels]
            return {
                ...state,
                wheels: arr0.sort((a, b )=>  a.price > b.price? 1:-1)
            }
        case TO_LOW:
            let arr01 =[...state.wheels]
            return {
                ...state,
                wheels: arr01.sort((a, b )=>  a.price < b.price? 1:-1)
            }
        case SHOW_RADIUS:
            let a = action.flag
                ? [...state.wheelsCopy0, ...state.wheelsCopy.filter(w=>w.radius===action.r)]
                :[...state.wheelsCopy0.filter(w=>w.radius!==action.r)]
                  return {
                ...state,
                      wheels: action.flag
                          ? [...state.wheelsCopy0, ...state.wheelsCopy.filter(w=>w.radius===action.r)]
                          : [...state.wheels.filter(w=>w.radius!==action.r)].length === 0
                              ? state.wheelsCopy
                              : [...state.wheels.filter(w=>w.radius!==action.r)] ,
                      wheelsCopy0: a,
            }
        case SET_WHEELS:
            return {
                ...state,
                // wheels: [...state.wheels, action.wheels.filter(w=>w.radius>state.wheels.length+1)],
                wheels: [...action.wheels],
                wheelsCopy: [...action.wheels],
                currentWheel: [],

                            }
        case IS_FETCHING:

            return {
                ...state,
                isFetching: action.body
            }
            default:
            return state;
    }
}

export const setIsFetching =(body) =>({ type:  IS_FETCHING,body })
export  const setWheels= (wheels) =>({type: SET_WHEELS,wheels })
export const  showToRadius = (r,flag) =>({ type: SHOW_RADIUS , r , flag })
export const  searchWheel = (text) =>({ type: SEARCH_WHEEL, text })
export const  getWheel = (body) =>({ type: GET_WHEEL, body })
export const  WheelsToUp = () =>({ type: TO_UP })
export const  WheelsToLow = () =>({ type: TO_LOW })
export const  minusCount = (idWheel) =>({ type: MINUS_COUNT, idWheel })
export const  addCount = (idWheel) =>({ type: ADD_COUNT, idWheel })
export const  changeCart = (idWheel) =>({ type: CHANGE_CART, idWheel })
export const cleanNewWheels = () => ({type: ADD_WHEELS})
export const updataWheels = (updateWheel) => ({type: UPDATE_NEW_WHEELS, updateWheel})


export const ThunkGetWheels = () => {
   return  (dispatch) => {
        dispatch(setIsFetching(true))
       WheelAPI.getwheels()
            .then(response => {
                dispatch(setIsFetching(false))

                    dispatch(setWheels(response.data))

            })
    }
}

export const ThunkGetWheel = (ID) => {
    return  (dispatch) => {
        dispatch(setIsFetching(true))
        WheelAPI.getWheel(ID)
            .then(response => {
                dispatch(setIsFetching(false))
                    dispatch(getWheel(response.data))

            })
    }
}

export const ThunkAddWheel =  (wheel) => {
    return async (dispatch) => {
        await WheelAPI.request('api/product','POST',wheel)
                   await (response => {
                         dispatch(setWheels( response))
            })
    }
}


export default wheelReducer