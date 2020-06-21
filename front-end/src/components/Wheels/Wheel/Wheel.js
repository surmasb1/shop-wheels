import React from 'react';
import s from './Wheel.module.css'

const Wheel = (props) => {
    console.log(props)
    const wheels = props.wheels
    const wheel = props.wheels[props.whellID - 1]
    return (
        wheels.length > 0 ? <div>
            <div className={s.wheel}>
                <img width='250px' height='300px' src={wheel.img} alt="ytvfdvn"/>
                <h2> marka - {wheel.marka}</h2>
                <p>radius - {wheel.radius}</p>
                <p>price - {wheel.price}</p>
                <p>age - {wheel.age}</p>
                <button>добавити в корзину </button>
                <button>видалити з корзину </button>

            </div>
        </div>: <div>sidfhdshf</div>
    );
}


export default Wheel;