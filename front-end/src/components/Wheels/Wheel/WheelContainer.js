import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Wheel from "./Wheel";
import {
    addCount,
    changeCart,
    minusCount,
    ThunkGetWheel

} from "../../../redux/wheel-reducer";
import Preloader from "../../common/Preloder/Preloder";


class WheelContainer extends React.Component {


    componentDidMount() {
        this.props.ThunkGetWheel(this.props.match.params.id)
    }

       render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>:
            <Wheel wheel={this.props.wheel}
                   changeCart={this.props.changeCart}
                   minusCount={this.props.minusCount}
                   addCount={this.props.addCount}
                //   id={this.props.match.params.id}
                   /> }
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        wheel: state.wheeldata.currentWheel,
        isFetching: state.wheeldata.isFetching
    }
}
let RouterWheelContainer = withRouter(WheelContainer)
export default connect(mapStateToProps,
    {       ThunkGetWheel
        ,changeCart, minusCount,
        addCount, })(RouterWheelContainer);