import React from 'react';
import s from './Wheels.module.css'
import {NavLink} from "react-router-dom";

const Wheels= (props)=>{
   let wheels = props.wheels;
   //let addwheel = props.addwheel
   // let minuswheel =props.minuswheel
    let changeCart = props.changeCart
    let addCount =props.addCount
    let minusCount= props.minusCount
    let WheelsToUp=props.WheelsToUp
    let WheelsToLow=props.WheelsToLow

    return (props.wheels?
        <div>
            <div>
                отсортировать по: <button onClick={()=>{WheelsToUp()}}>от дешевых к дорогим</button>
                <button onClick={()=>{WheelsToLow()}}>от дорогих к дешевых </button>
            </div>
            <div className={s.wheels}>
                {wheels.map((wheel)=>{
                    return(
                        <div key={wheel.id} className={wheel.hide ? s.hide :s.wheel }>
                            <img width='270px' height='250px' src={wheel.img} alt="ytvfdvn"/>


                            {wheel.cart
                                ?<div>
                                    <button onClick={() => {addCount(wheel.id)

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
                    )
                })}

            </div>
        </div>: 'fdsgfds'

    );
}

export default Wheels;