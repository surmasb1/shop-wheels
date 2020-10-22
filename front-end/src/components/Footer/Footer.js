import React from 'react';
import s from './Footer.module.css'

const Footer= ()=>{
    return (
        <div className={s.footer}>
            <span>
                <h5>Footer</h5>
            <h5>Тел: +80000000000</h5>
            </span>
            <span>
               
                <h5>м. Хуст, вул. Головна 1а</h5>
            <h5>Тел: +80000000000</h5>

            </span>
        </div>
    );
}

export default Footer;