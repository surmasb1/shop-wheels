import React from 'react';
import s from './Cart.module.css'
import {NavLink} from "react-router-dom";

const Cart = (props) => {
    console.log(props)
    let wheels = props.wheels.filter(w=>w.cart===true );
    console.log(wheels)
   // let addwheel = props.addwheel
   // let minuswheel =props.minuswheel
    let changeCart = props.changeCart
    let addCount =props.addCount
    let minusCount= props.minusCount

console.log(wheels)
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
                                                //minuswheel(wheel)
                                            }
                                        }}>-</button>
                                        <button
                                            onClick={() => {
                                                changeCart(wheel.id)
                                               // minuswheel(wheel)

                                            }}>
                                            Видалити з корзини</button>
                                    </div>
                                    : <div>.</div>
                                    // <button
                                    //     onClick={() => {
                                    //         changeCart(wheel.id)
                                    //         CartchangeCart(wheel.id)
                                    //         addwheel(wheel)
                                    //
                                    //     }}>
                                    //     Добавити в корзину</button>
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