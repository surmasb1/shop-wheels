import React from 'react';

import {connect} from 'react-redux'
import Header from "./Header";


const HeaderContainer= (props)=>{
    return (
        <Header wheels={props.wheels} />
    );
}

let mapStateToProps = (state)=>{
    return{
        wheels: state.wheeldata.wheels
    }

}
export default connect(mapStateToProps, {}) (HeaderContainer);
