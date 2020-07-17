//import {authAPI} from "../api/api";

import {WheelAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR = 'SET_ERROR';

let initialState = {
err:null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                err: action.payload.err
            }
        default:
            return state;
    }
}


export const setAuthUserData = ( email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        { email, login, isAuth}
});
export const setError = ( err) => ({
    type: SET_ERROR, payload:
        { err}
});

export const getAuthUserData = (body) => async (dispatch) => {
    let response = await  WheelAPI.request('/auth','POST', body);
console.log(response)
    if (response.token) {
        let { login, email} = response;
        dispatch(setAuthUserData( email, login, true));
    } else{
        dispatch(setError(response))
    }
}



export const logout = () => async (dispatch) => {



        dispatch(setAuthUserData( null, null, false));

}

export default authReducer;