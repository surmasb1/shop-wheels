
//const CHANGE_HIDE ='CHANGE_HIDE'
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

let initialState={
    wheels:
        [
        // {
        //     marka: 'nokian1',
        //     age:10,
        //     radius:16,
        //     stan: 'good',
        //     price:55,
        //     id: 1,
        //     cart:false,
        //     count:0 ,
        //    hide: false,
        //     img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'
        // },
        // {   marka: 'rossava1',
        //     age:8,
        //     radius:17,
        //     stan: 'good',
        //     price:35,
        //     id: 2,
        //     cart:false,
        //     count: 0,
        //    hide: false,
        //     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjlCFqqTCH80LkUvDJywVMvwYzQAbnMNhAEzUR_EtH9ecbBDe&usqp=CAU'
        // },
        // {   marka: 'michelin1',
        //     age:5,
        //     radius:18,
        //     stan: 'soso',
        //     price:60,
        //     id: 3,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://rezina.cc/products/thumbs/000/009/923/9923_240x240.jpg?v=1588246642'
        // },
        // {   marka: 'Bridgestone1',
        //     age:7,
        //     radius:19,
        //     stan: 'ифв',
        //     price:20,
        //     id: 4,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://i1.rozetka.ua/goods/3737330/34826895_images_3737330371.jpg'
        // },
        // {   marka: 'hankook1',
        //     age:12,
        //     radius:19,
        //     stan: 'bad',
        //     price:15,
        //     id: 5,
        //     cart:false,
        //     count: 0,
        //    hide: false,
        //     img:'https://shinadiski.com.ua/uploads/models/tyre/2426_1.jpg'
        // },
        // {
        //     marka: 'nokian2',
        //     age:10,
        //     radius:16,
        //     stan: 'good',
        //     price:43,
        //     id: 6,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'
        // },
        // {   marka: 'rossava2',
        //     age:8,
        //     radius:17,
        //     stan: 'good',
        //     price:25,
        //     id: 7,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjlCFqqTCH80LkUvDJywVMvwYzQAbnMNhAEzUR_EtH9ecbBDe&usqp=CAU'
        // },
        // {   marka: 'michelin2',
        //     age:5,
        //     radius:20,
        //     stan: 'soso',
        //     price:48,
        //     id: 8,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://rezina.cc/products/thumbs/000/009/923/9923_240x240.jpg?v=1588246642'
        // },
        // {   marka: 'Bridgestone2',
        //     age:7,
        //     radius:20,
        //     stan: 'ифв',
        //     price:56,
        //     id: 9,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://i1.rozetka.ua/goods/3737330/34826895_images_3737330371.jpg'
        // },
        // {   marka: 'hankook2',
        //     age:12,
        //     radius:18,
        //     stan: 'bad',
        //     price:54,
        //     id: 10,
        //     cart:false,
        //     count: 0,
        //     hide: false,
        //     img:'https://shinadiski.com.ua/uploads/models/tyre/2426_1.jpg'
        // }

    ],
    newWheels:{
        marka: 'marka',
        age:'age',
        radius:'radius',
        stan: 'stan',
        price: 'price'

    },
    wheelsCopy:[],
    wheelsCopy0:[]
}

const wheelReducer = (state=initialState, action)=> {
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
                wheels: [...state.wheels, ...action.wheels ],
                wheelsCopy: [...action.wheels]
            }
            default:
            return state;
    }
}

//export const changehide =() =>({ type: CHANGE_HIDE })
export  const setWheels= (wheels) =>({type: SET_WHEELS,wheels })
export const  showToRadius = (r,flag) =>({ type: SHOW_RADIUS , r , flag })
export const  searchWheel = (text) =>({ type: SEARCH_WHEEL, text })
export const  WheelsToUp = () =>({ type: TO_UP })
export const  WheelsToLow = () =>({ type: TO_LOW })
export const  minusCount = (idWheel) =>({ type: MINUS_COUNT, idWheel })
export const  addCount = (idWheel) =>({ type: ADD_COUNT, idWheel })
export const  changeCart = (idWheel) =>({ type: CHANGE_CART, idWheel })
export const addWheels = (w) => ({type: ADD_WHEELS, w})
export const updataWheels = (updateWheel) => ({type: UPDATE_NEW_WHEELS, updateWheel})
export default wheelReducer