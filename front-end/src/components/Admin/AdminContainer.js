import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {ThunkAddWheel, } from "../../redux/wheel-reducer";
import {logout} from "../../redux/auth-reducer";

class AdminContainer extends React.Component {

    render() {
        return (
            <Admin ThunkAddWheel={this.props.ThunkAddWheel}
                   isAuth={this.props.isAuth}
                   login={this.props.login}
                   logout={this.props.logout}
            />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}
export default connect(mapStateToProps,{
    ThunkAddWheel, logout}) (AdminContainer);