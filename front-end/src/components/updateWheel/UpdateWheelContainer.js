import React from 'react';
import {connect} from "react-redux";
import UpdateWheel from "./UpdateWheel";
import {withRouter} from "react-router-dom";
import {ThunkUpdateWheel,ThunkGetWheel,ThunkDeleteWheel} from "../../redux/wheel-reducer";

class UpdateWheelContainer extends React.Component {
    componentDidMount() {
        this.props.ThunkGetWheel(this.props.match.params.id)
    }
    render() {
        return (
            <UpdateWheel
                wheel={this.props.wheel}
                id={this.props.match.params.id}
                ThunkUpdateWheel={this.props.ThunkUpdateWheel}
                ThunkDeleteWheel={this.props.ThunkDeleteWheel}

            />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        wheel: state.wheeldata.currentWheel,


    }
}

let RouterUpdateWheelContainer = withRouter(UpdateWheelContainer)

export default connect(mapStateToProps,{ThunkUpdateWheel,ThunkGetWheel,ThunkDeleteWheel
    }) (RouterUpdateWheelContainer);