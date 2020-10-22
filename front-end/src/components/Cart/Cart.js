import React from 'react';
import s from './Cart.module.css'
import {NavLink} from "react-router-dom";

const Cart = (props) => {
    let wheels = props.wheels.filter(w=>w.cart===true );
    let changeCart = props.changeCart
    let addCount =props.addCount
    let minusCount= props.minusCount


    return (
        <div>
            {wheels.length===0 ? <div>Корзина пуста</div>:
                <div className={s.wheels}>
                    {wheels.map((wheel)=>{
                        return(
                            <div key={wheel.id} className={s.wheel}>
                                <div>
                                    <img width='270px' height='250px' src={wheel.img} alt="ytvfdvn"/>
                                    {wheel.cart
                                        ?<div>
                                            <button className={s.btnFilterplusminus} onClick={() => {
                                                addCount(wheel.id)
                                            }}>+</button>
                                            <button className={s.btnFilterplusminus} onClick={() => {
                                                minusCount(wheel.id)
                                                if (wheel.count ===1){
                                                    changeCart(wheel.id)
                                                }
                                            }}>-</button>
                                            <button className={s.btnFilter1}
                                                onClick={() => {
                                                    changeCart(wheel.id)
                                                }}>
                                                Видалити з корзини</button>
                                        </div>
                                        : <div>.</div>
                                    }
                                </div>
                                <div className={s.info}>
                                    <NavLink to={'/wheels/' +wheel.id }>  <h2>  {wheel.marka}</h2></NavLink>
                                    <p className={s.inforadius}>R  - {wheel.radius} дюймів</p>
                                    <p className={s.stringinfo} >Сезон - {wheel.stan}</p>
                                    <p className={s.infoprice}>Ціна - {wheel.price}$</p>
                                </div>

                            </div>
                        )
                    })}

                </div>}
        </div>

    );
}


export default Cart;