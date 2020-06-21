import React, {useEffect, useState} from 'react';
import  axios from 'axios'


const Admin = (props) => {
    let newWheel = props.newWheels || {}
   console.log(props)
    let markaWheel = React.createRef()
    let ageWheel = React.createRef()
    let radiusWheel = React.createRef()
    let stanWheel = React.createRef()
    let priceWheel = React.createRef()


    const [products, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const a = await axios.get("/api/product")
            setProduct(a.data)
            // console.log(a)
        }
        fetchData();
        return () => {
        }

    }, [])
    console.log(products)





    let updateWheel
    let onChangeWheel = ()=>{
         updateWheel ={
                marka: markaWheel.current.value,
                age:ageWheel.current.value,
                radius:radiusWheel.current.value,
                stan: stanWheel.current.value,
                price:priceWheel.current.value
        }
       props.updataWheels(updateWheel)

    }



    let sendWheel = () =>{
        if (markaWheel.current.value==='' ||
            ageWheel.current.value==='' ||
            radiusWheel.current.value===''||
            stanWheel.current.value==='' ||
            priceWheel.current.value===''){
            console.log('ffhgfghgfh')
            alert('НЕ заполнена одна из опций')
            }
        else {
            props.addwheels(updateWheel)
        }


    }



    return (
        <div>
            <div>
                <div>
                    <span>marka</span>
                    <textarea
                        onChange={onChangeWheel}
                            value = {newWheel.marka}
                            ref={markaWheel}
                    />
                </div>
                <div>
                    <span>age</span>
                    <textarea
                        onChange={onChangeWheel}
                             value = {newWheel.age}
                             ref={ageWheel}
                    />
                </div>
                <div>
                    <span>radius</span>
                    <textarea
                        onChange={onChangeWheel}
                            value = {newWheel.radius}
                            ref={radiusWheel}
                    />
                </div>
                <div>
                    <span>stan</span>
                    <textarea
                        onChange={onChangeWheel}
                            value = {newWheel.stan}
                            ref={stanWheel}
                    />
                </div>
                <div>
                    <span>price</span>
                    <textarea

                        onChange={onChangeWheel}
                            value = {newWheel.price}
                            ref={priceWheel}
                    />
                </div>
                <div><button
                    onClick={
                    sendWheel
                }
                >отправити</button></div>
            </div>
        </div>

    );
}


export default Admin;