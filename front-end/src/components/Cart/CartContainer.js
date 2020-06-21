import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart";
//import {addWheel, minuswheel,} from "../../redux/cart-reducer";
import {addCount, changeCart, minusCount} from "../../redux/wheel-reducer";


class CartContainer extends React.Component {

    render() {
        return (
            <Cart wheels={this.props.wheels}
                 // addwheel={this.props.addWheel}
                 // minuswheel={this.props.minuswheel}
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