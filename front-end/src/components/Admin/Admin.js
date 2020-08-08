import React from 'react';
import {Redirect} from "react-router-dom";
import s from "./Admin.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../utils/forms";
import {maxLengthCreator, required} from "../../utils/validator";
import Button from '@material-ui/core/Button';



const Admin = (props) => {

    // const [products, setProduct] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const a = await axios.get("/api/product")
    //         setProduct(a.data)
    //         // console.log(a)
    //     }
    //     fetchData();
    //
    //
    // }, [])
    // console.log(products)

    let logouts=()=>{
        props.logout()
    }

    const addNewWheel=(values)=>{
        props.ThunkAddWheel(values)
        console.log(values)
    }

    if(!props.isAuth) {return <Redirect to={'/login'}/>}

    return (
        <div>
            <div className={s.logout}>
                <button onClick={
                    logouts
                }>logout</button>
            </div>

            <AdminFormRedux onSubmit={addNewWheel}/>

        </div>

    );
}
const maxLength10 = maxLengthCreator(30)
const AdminForm = (props)=>{

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>marka</span><br/>
               <Field placeholder={'marka'} name={"marka"}
                     validate={[required, maxLength10]}
                      component={Textarea}
               />

            </div>
            <div>
                <span>age</span><br/>
                <Field placeholder={'age'} type={"number"} name={"age"}
                    validate={[required, maxLength10]}
                 component={Input}/>
            </div>
            <div>
                <span>radius</span><br/>
                <Field placeholder={'radius'}
                      validate={[required, maxLength10]}
                name={"radius"} type={"number"} component={Input}/>
            </div>
            <div>
                <span>stan</span><br/>
                <Field placeholder={'stan'}
                       validate={[required, maxLength10]}
                name={"stan"} component={Textarea}/>
            </div>
            <div>
                <span>price</span><br/>
                <Field placeholder={'price'}
                       validate={[required, maxLength10]}
                name={"price"} type={"number"} component={Input}/>
            </div>
            <div>
                <button>Відправити</button>
            </div>
        </form>
    )
}
const AdminFormRedux = reduxForm({form:'adminform'})(AdminForm)

export default Admin;