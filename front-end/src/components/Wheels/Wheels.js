import React from 'react';
import s from './Wheels.module.css'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

const Wheels= (props)=>{
    let isAuth =props.auth
    let wheels = props.wheels;
    let changeCart = props.changeCart;
    let addCount =props.addCount;
    let minusCount= props.minusCount;
    let WheelsToUp=props.WheelsToUp;
    let WheelsToLow=props.WheelsToLow;

    return (props.wheels?
        <div>
            <div className={s.divfilter}>
                <span className={s.filter}>впорядкувати по:</span> <button className={s.btnFilter} onClick={()=>{WheelsToUp()}}>від дешевших до дорощих</button>
                <button className={s.btnFilter} onClick={()=>{WheelsToLow()}}>від дорощих до дешевших </button>
            </div>
            <div className={s.wheels}>
                {wheels.map((wheel)=>{
                    return(
                        <div key={wheel.id} className={wheel.hide ? s.hide :s.wheel }>
                            <img width='270px' height='250px' src={wheel.img} alt="ytvfdvn"/>
                            {wheel.cart
                                ?<div>
                                    <button className={s.btnFilter1} onClick={() => {addCount(wheel.id)}}>+</button>
                                    <button className={s.btnFilter1} onClick={() => {
                                        minusCount(wheel.id)
                                        if (wheel.count ===1){
                                            changeCart(wheel.id)
                                        }}}>-</button>
                                    <button className={s.btnFilter1}
                                        onClick={() => {changeCart(wheel.id)
                                        }}> Видалити з корзини</button>
                                </div>
                                : <button className={s.btnFilter1}
                                    onClick={() => {changeCart(wheel.id)
                                    }}>  Добавити в корзину</button>}
                            <NavLink to={'/wheels/' +wheel.id }>  <h2> marka - {wheel.marka} {wheel.count}</h2></NavLink>
                            <p>radius - {wheel.radius}</p>
                            <p>price - {wheel.price}</p>
                            <p>age - {wheel.age}</p>
                            <p>id - {wheel.id}</p>
                            <div>
                                {
                                    isAuth?<NavLink to={"/update/" +wheel.id }>
                                        <h5 className={s.head}>Змінити</h5>
                                    </NavLink>:''
                                }
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>: 'Товари не загружені з сервера'

    );
}

export default Wheels;