import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {ThunkAddWheel, updataWheels} from "../../redux/wheel-reducer";

class AdminContainer extends React.Component {

    render() {
        return (
            <Admin newWheels={this.props.newWheels}
                   updataWheels={this.props.updataWheels}
                   ThunkAddWheel={this.props.ThunkAddWheel}
            />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        newWheels: state.wheeldata.newWheels
    }
}
export default connect(mapStateToProps,{
    updataWheels,ThunkAddWheel}) (AdminContainer);