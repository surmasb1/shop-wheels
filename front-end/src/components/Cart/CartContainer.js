import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart";
import {addCount, changeCart, minusCount} from "../../redux/wheel-reducer";


class CartContainer extends React.Component {

    render() {
        return (
            <Cart wheels={this.props.wheels}
                  changeCart={this.props.changeCart}
                  minusCount={this.props.minusCount}
                  addCount={this.props.addCount}

            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        wheels: state.wheeldata.wheels
    }
}

export default connect(mapStateToProps,{changeCart,
    addCount,minusCount}) (CartContainer);