import React from "react";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'
const Login= (props)=>{

    let email = React.createRef()
    let password = React.createRef()

    let senddata = () =>{

        let body={
            email: email.current.value,
            password: password.current.value
        }
        props.getAuthUserData(body)





    }
    if(props.isAuth) {return <Redirect to={'/admin'}/>}

    return (
        <div>

            <div>
                <span>login</span>
                <input
                    ref={email}
                />
            </div>
            <div>
                <span>password</span>
                <input

                    ref={password}
                />

            </div>
            <div><button
                onClick={
                    senddata
                }
            >отправити</button>
            </div>

<div>  {props.err ? <p className={s.login}> {props.err.message} </p>:''}
</div>
        </div>
    );
}


export default Login;