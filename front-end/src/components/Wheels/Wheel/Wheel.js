import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Wheel.module.css'

const Wheel = (props) => {
  //  console.log(props)
     const wheel = props.wheel[0]
    let changeCart = props.changeCart
    let addCount =props.addCount
    let minusCount= props.minusCount



    return (
        props.wheel.length > 0 ?
            <div>
                <div className={s.wheel}>
                    <img width='270px' height='250px' src={wheel.img} alt="ytvfdvn"/>
                    {wheel.cart
                        ?<div>
                            <button onClick={() => {
                                addCount(wheel.id)
                                //fetchData(count: wheel.count+1, wheel.id);
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
                        : <button
                            onClick={() => {
                                changeCart(wheel.id)
                            }}>
                            Добавити в корзину</button>}
                    <NavLink to={'/wheels/' +wheel.id }>  <h2> marka - {wheel.marka} {wheel.count}</h2></NavLink>
                    <p>radius - {wheel.radius}</p>
                    <p>price - {wheel.price}</p>
                    <p>age - {wheel.age}</p>
                </div>

        </div>: <div>Товар не завантажений з сервера</div>
    );
}


export default Wheel;