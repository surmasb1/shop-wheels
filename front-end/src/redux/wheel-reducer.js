import {WheelAPI} from "../api/api";



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
                        }  return w
                    } return w
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
                wheels: [...action.wheels],
                wheelsCopy: [...action.wheels],

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
export const  WheelsToUp = () =>({ type: TO_UP })
export const  WheelsToLow = () =>({ type: TO_LOW })
export const  minusCount = (idWheel) =>({ type: MINUS_COUNT, idWheel })
export const  addCount = (idWheel) =>({ type: ADD_COUNT, idWheel })
export const  changeCart = (idWheel) =>({ type: CHANGE_CART, idWheel })
export const GetWheel =(body) =>({ type:  GET_WHEEL,body })



export const ThunkGetWheels = () => {
   return  async (dispatch) => {
      // console.log(dispatch)
        dispatch(setIsFetching(true))
       let response = await WheelAPI.getwheels()
       dispatch(setIsFetching(false))
       dispatch(setWheels(response.data))

            // .then(response => {

       console.log(response)

           //})
    }
}

export const ThunkAddWheel =  (wheel) => {
    return async (dispatch) => {
        await WheelAPI.request('api/product','POST',wheel)
                 // await (response => {
                       //  dispatch(setWheels( response))
           // })
    }
}

export const ThunkUpdateWheel =  (body,id) => {
    console.log(body)
    return  (dispatch) => {
         WheelAPI.request(`/api/product/${id}`,'PUT',body)
             .then((response => {
                       console.log(response)
                 GetWheel(body)
            }))
    }
}

export const ThunkGetWheel =  (id) => {
    return  (dispatch) => {
         WheelAPI.request(`/wheels/api/product/${id}`,'get')
             .then( (response => {
          //  console.log(response)
            dispatch(GetWheel(response))
        }))
    }
}
export const ThunkDeleteWheel =  (id) => {
    return  (dispatch) => {
         WheelAPI.request(`/api/product/${id}`,'delete')
             .then( (response => {
            console.log(response)

        }))
    }
}


export default wheelReducer