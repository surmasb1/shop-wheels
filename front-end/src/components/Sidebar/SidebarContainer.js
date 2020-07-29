import React from 'react';
import './Sidebar.module.css'
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

import {searchWheel, showToRadius} from "../../redux/wheel-reducer";
import {withRouter} from "react-router-dom";

class SidebarContainer extends React.Component {


    render() {
        return (
            <Sidebar
                searchWheel={this.props.searchWheel}
                showToRadius={this.props.showToRadius}
                datahref={this.props.match}


            />
        );
    }
}
let mapStateToProps = (state) => {
    return {
        wheels: state.wheeldata.wheels
    }
}

let RouterWheelContainer = withRouter(SidebarContainer)

export default connect(mapStateToProps, {searchWheel,showToRadius}) (RouterWheelContainer);