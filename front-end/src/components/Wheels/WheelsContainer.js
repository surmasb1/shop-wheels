import React from 'react';
import {connect} from "react-redux";
import Wheels from "./Wheels";
import {
    addCount,
    changeCart,
    minusCount,
    WheelsToLow,
    WheelsToUp,
    ThunkGetWheels
} from "../../redux/wheel-reducer";
import Preloader from "../common/Preloder/Preloder";


class WheelsContainer extends React.Component {

    componentDidMount() {
      this.props.ThunkGetWheels()
          }


    render() {
        console.log(this.props.isFetching)
        return <>
            {this.props.isFetching ? <Preloader/>:
            <Wheels wheels={this.props.wheels}
                    changeCart={this.props.changeCart}
                    minusCount={this.props.minusCount}
                    addCount={this.props.addCount}
                    WheelsToUp={this.props.WheelsToUp}
                    WheelsToLow={this.props.WheelsToLow}
                    auth={this.props.auth}
            />}
        </>
    }
}

let mapStateToProps = (state) => ({

        wheels: state.wheeldata.wheels,
    isFetching: state.wheeldata.isFetching,
        auth:state.auth.isAuth,
})

export default connect(mapStateToProps, { changeCart,
    addCount,minusCount,ThunkGetWheels,
    WheelsToUp,WheelsToLow})(WheelsContainer);