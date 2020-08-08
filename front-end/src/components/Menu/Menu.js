import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu= ()=>{
    const menu = [
        {ua:'Велосипеди',
            eng:'cicle'},
        {ua:'Побутова техніка',
            eng:'household-appliances'},
        {ua:'Колеса',
            eng:'wheels'},
        {ua:'Садова техніка',
            eng:'garden-equipment'},
        {ua:'Меблі',
            eng:'furniture'}
    ];
    return (
        <div> <nav className={s.menu}>
            {menu.map((item,index)=>{
                let path = '/' + item.eng
                return(
                       // <div >
                           <NavLink className={s.link} key={index} activeClassName={s.active} to={path}><p >{item.ua}</p></NavLink>
                       // </div>
                )
            })}
        </nav>
        </div>
    );
}

export default Menu;