import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Wheel from "./Wheel";
import {setWheels, ThunkGetWheel} from "../../../redux/wheel-reducer";
import Preloader from "../../common/Preloder/Preloder";


class WheelContainer extends React.Component {


    componentDidMount() {
       let whellID = this.props.match.params.id
        this.props.ThunkGetWheel(whellID)
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>:
            <Wheel wheel={this.props.wheel}
                   />
                }
            </>
        );
    }
}


let mapStateToProps = (state) => {
    //console.log(state)
    return {
        wheel: state.wheeldata.currentWheel,
        isFetching: state.wheeldata.isFetching
    }
}
let RouterWheelContainer = withRouter(WheelContainer)
export default connect(mapStateToProps, {setWheels,ThunkGetWheel})(RouterWheelContainer);