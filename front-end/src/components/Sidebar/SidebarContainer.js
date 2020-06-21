import React from 'react';
import './Sidebar.css'
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

import {searchWheel, showToRadius} from "../../redux/wheel-reducer";

class SidebarContainer extends React.Component {

    render() {
        return (
            <Sidebar
                searchWheel={this.props.searchWheel}
                showToRadius={this.props.showToRadius}

            />
        );
    }
}
let mapStateToProps = (state) => {
    return {
        wheels: state.wheeldata.wheels
    }
}


export default connect(mapStateToProps, {searchWheel,showToRadius}) (SidebarContainer);