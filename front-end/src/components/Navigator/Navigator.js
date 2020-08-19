import React from 'react';
import s from './Navigator.module.css'
import img from '../../images/protector.jpg'
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

const Navigator= (props)=>{
    let a=[]
    let wheels = props.wheels===undefined ? a : props.wheels.filter(w=>w.cart===true ) ;
    return (

        <div className={s.header}>


            <div>
                <img src={img} height='20%' width='30%' alt="protector" />
            </div>
            <div>s
                222222
            </div>
            <NavLink  to="/login">
            <h4 className={s.user}>{props.isAuth ? props.login : <p> Вхід </p>} </h4>
        </NavLink>
            </div>


    );
}

export default Navigator;
