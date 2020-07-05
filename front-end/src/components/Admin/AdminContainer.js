import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {addWheels, ThunkAddWheel, updataWheels} from "../../redux/wheel-reducer";

class AdminContainer extends React.Component {

    render() {
        return (
            <Admin newWheels={this.props.newWheels}
                  //addwheels={this.props.addWheels}
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
  //  addWheels,
    updataWheels,ThunkAddWheel}) (AdminContainer);