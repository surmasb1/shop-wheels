import React from "react";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validator";
import {Input} from "../../utils/forms";

const Login = (props) => {

    const onSubmit =(formData)=>{
       props.getAuthUserData(formData)
        console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'/admin'}/>
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div>
                {props.err ? <p className={s.login}> {props.err.message} </p> : ''}
            </div>
        </div>
    );
}
let maxLength10 =  maxLengthCreator(10)

 const LoginForm=(props)=>{
     return (
             <form onSubmit={props.handleSubmit}>
                 <div>
                     <Field name={'email'} placeholder={"login "}
                            validate={[required, maxLength10]}
                            component={Input}/>
                 </div>
                 <div>
                     <Field name={'password'} placeholder={"password"}
                            type={"password"}
                            component={Input}
                            validate={[required, maxLength10]}/>
                 </div>
                 <div>
                     <button>Увійти</button>
                 </div>
             </form>
     );
 }
 const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
export default Login;