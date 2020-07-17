import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {ThunkAddWheel, updataWheels} from "../../redux/wheel-reducer";
import {cleanNewWheels} from '../../redux/wheel-reducer'
import {logout} from "../../redux/auth-reducer";

class AdminContainer extends React.Component {

    render() {
        return (
            <Admin newWheels={this.props.newWheels}
                   updataWheels={this.props.updataWheels}
                   ThunkAddWheel={this.props.ThunkAddWheel}
                   addwheels={this.props.cleanNewWheels}
                   isAuth={this.props.isAuth}
                   login={this.props.login}
                   logout={this.props.logout}
            />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        newWheels: state.wheeldata.newWheels,
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}
export default connect(mapStateToProps,{
    updataWheels,ThunkAddWheel, cleanNewWheels,logout}) (AdminContainer);