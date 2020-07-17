import React from 'react';
import {getAuthUserData} from "../../redux/auth-reducer";
import Login from "./Login";
import {connect} from "react-redux";



class LoginContainer extends React.Component {

    render() {
       return( <Login
           getAuthUserData={this.props.getAuthUserData}
           isAuth={this.props.isAuth}
           err={this.props.err}

        />)
    }

}

let mapStateToProps = (state) => {

    return {
        newWheels: state.wheeldata.newWheels,
        isAuth: state.auth.isAuth,
        err: state.auth.err,

    }
}
export default connect(mapStateToProps,{
    getAuthUserData}) (LoginContainer);

