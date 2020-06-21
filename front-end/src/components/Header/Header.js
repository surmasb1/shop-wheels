import React from 'react';
import s from './Header.module.css'
import img from '../../images/header-wheels.png'
import {NavLink} from "react-router-dom";


const Header= (props)=>{
    //console.log(props)
    let a=[]
    let wheels = props.wheels===undefined ? a : props.wheels.filter(w=>w.cart===true ) ;
    return (
        <div className={s.header}>
            <NavLink className={s.img} to="/">
                <img src={img} width='50%' height="50%" alt="lorem"/>
            </NavLink>
            <div>
                <NavLink to="/cart">
                    <h5 className={s.head}>CART {wheels.length}</h5>
                </NavLink>
                <NavLink to="/admin">
                    <h2 className={s.head}>ADMIN </h2>
                </NavLink>
            </div>

        </div>
    );
}

export default Header;
