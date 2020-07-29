import React from 'react';
import s from './Header.module.css'
import img from '../../images/header-wheels.png'
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

const Header= (props)=>{
    let a=[]
    let wheels = props.wheels===undefined ? a : props.wheels.filter(w=>w.cart===true ) ;
    return (
        <div className={s.header}>
            <div className={s.img}>
                <NavLink  to="/">
                    <img src={img} width='60%' height="60%" alt="lorem"/>
                </NavLink>
            </div>
            <div className={s.cartlogin} >
                    <NavLink  to="/login">
                        <h5>{props.isAuth ? props.login : <Button variant="text" size='small'  >Вхід</Button>} </h5>
                    </NavLink>
                        <div className={s.divcart}>
                            {wheels.length}</div>
                        <NavLink  to="/cart">
                           <ShoppingCartIcon fontSize="large"/>
                    </NavLink>
            </div>
        </div>
    );
}

export default Header;
