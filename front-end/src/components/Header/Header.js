import React from 'react';
import s from './Header.module.css'
import img from '../../images/header-wheels.png'
import {NavLink} from "react-router-dom";

const Header= (props)=>{
    let a=[]
    let wheels = props.wheels===undefined ? a : props.wheels.filter(w=>w.cart===true ) ;
    return (

        <div className={s.header}>
            
                 <div className={s.button}>
                    <NavLink  to="/login">
                        <button className={s.button1}>{props.isAuth ? props.login :' Вхід'}
                        </button>
                    </NavLink>  
                 </div>
                        
                   
                <div className={s.img}>
                    <NavLink  to="/">
                        <img src={img} width='100%' height="100%" alt="lorem"/>
                    </NavLink>
                </div>
                <div className={s.cartlogin} >
                  {/*   <NavLink  to="/login">
                        <h5 className={s.user}>{props.isAuth ? props.login : <button className={s.button1} >Вхід</button>} </h5>
                    </NavLink> */}
                   {/*  <div className={s.divcart}>
                        {wheels.length}</div>
                    <NavLink  to="/cart">
                    <img  alt='lorem' src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png"/>
                    </NavLink> */}
                </div>
            </div>


    );
}

export default Header;
