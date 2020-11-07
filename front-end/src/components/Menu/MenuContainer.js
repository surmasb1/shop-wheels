import React from 'react';

import {connect} from 'react-redux'
import Menu from "./Menu";


const MenuContainer= (props)=>{
    return (
        <Menu wheels={props.wheels}
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
export default connect(mapStateToProps, {}) (MenuContainer);
