import React from 'react';

import {connect} from 'react-redux'
import Header from "./Header";


const HeaderContainer= (props)=>{
    return (
        <Header wheels={props.wheels}
                isAuth={props.isAuth}
                login={props.login}
        />
    );
}

let mapStateToProps = (state)=>{
    return{
        wheels: state.wheeldata.wheels,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }

}
export default connect(mapStateToProps, {}) (HeaderContainer);
