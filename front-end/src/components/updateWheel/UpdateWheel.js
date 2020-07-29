import React from 'react';
import s from "./UpdateWheel.modules.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../utils/forms";


const UpdateWheel = (props) => {
    console.log(props)
    const id =props.id
    const wheel = props.wheel[0]
const del=()=>{
    props.ThunkDeleteWheel(id)
}
        const upDateWheel=(values)=>{

       props.ThunkUpdateWheel(values,id)
        console.log(values)
          }

    return ( props.wheel.length > 0 ?
        <div>
            <div>
                    <div className={s.wheel}>
                        <img width='270px' height='250px' src={wheel.img} alt="ytvfdvn"/>
                        <p>radius - {wheel.radius}</p>
                        <p>price - {wheel.price}</p>
                        <p>age - {wheel.age}</p>
                        <p>stan---- - {wheel.stan}</p>

                    </div>
            </div>
            <UpdateFormRedux onSubmit={upDateWheel}/>
            <button onClick={del}>delete</button>
        </div>:<div>g</div>

    );
}

const UpdateForm = (props)=>{

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>marka</span><br/>
                <Field placeholder={'marka'} name={"marka"}
                       component={Textarea}
                />

            </div>
            <div>
                <span>age</span><br/>
                <Field placeholder={'age'} type={"number"} name={"age"}
                       component={Input}/>
            </div>
            <div>
                <span>radius</span><br/>
                <Field placeholder={'radius'}
                       name={"radius"} type={"number"} component={Input}/>
            </div>
            <div>
                <span>stan</span><br/>
                <Field placeholder={'stan'}
                       name={"stan"} component={Textarea}/>
            </div>
            <div>
                <span>price</span><br/>
                <Field placeholder={'price'}
                       name={"price"} type={"number"} component={Input}/>
            </div>
            <div>
                <button>Відправити</button>
            </div>
        </form>
    )
}
const UpdateFormRedux = reduxForm({form:'updateform'})(UpdateForm)

export default UpdateWheel;