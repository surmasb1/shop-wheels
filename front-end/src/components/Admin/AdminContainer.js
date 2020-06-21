import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {addWheels, updataWheels} from "../../redux/wheel-reducer";

class AdminContainer extends React.Component {

    render() {
        return (
            <Admin newWheels={this.props.newWheels}
                  addwheels={this.props.addWheels}
                   updataWheels={this.props.updataWheels}
            />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        newWheels: state.wheeldata.newWheels
    }
}
export default connect(mapStateToProps,{addWheels,updataWheels}) (AdminContainer);