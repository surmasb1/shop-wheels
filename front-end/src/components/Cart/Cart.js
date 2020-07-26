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
                                <img width='270px' height='250px' src={wheel.img} alt="ytvfdvn"/>
                                {wheel.cart
                                    ?<div>
                                        <button onClick={() => {
                                            addCount(wheel.id)
                                        }}>+</button>
                                        <button onClick={() => {
                                           minusCount(wheel.id)
                                            if (wheel.count ===1){
                                                changeCart(wheel.id)
                                            }
                                        }}>-</button>
                                        <button
                                            onClick={() => {
                                                changeCart(wheel.id)
                                            }}>
                                            Видалити з корзини</button>
                                    </div>
                                    : <div>.</div>
                                   }
                                   <NavLink to={'/wheels/' +wheel.id }>  <h2> marka - {wheel.marka}</h2></NavLink>
                                <p>radius - {wheel.radius}</p>
                                <p>price - {wheel.price}</p>
                                <p>age - {wheel.age}</p>
                                <p>count - {wheel.count}</p>
                            </div>
                        )
                    })}

                </div>}
        </div>

    );
}


export default Cart;