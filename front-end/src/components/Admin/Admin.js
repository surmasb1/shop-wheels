import React from 'react';



const Admin = (props) => {
    let newWheel = props.newWheels
 //  console.log(props)
    let markaWheel = React.createRef()
    let ageWheel = React.createRef()
    let radiusWheel = React.createRef()
    let stanWheel = React.createRef()
    let priceWheel = React.createRef()


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



    let updateWheel
    let onChangeWheel = ()=>{
         updateWheel ={
             marka: markaWheel.current.value,
             age:Number(ageWheel.current.value),
             radius: Number(radiusWheel.current.value),
             stan: stanWheel.current.value,
             price:Number(priceWheel.current.value)
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
            // let updateWheel0 ={
            //     marka: markaWheel.current.value,
            //     age:Number(ageWheel.current.value),
            //     radius: Number(radiusWheel.current.value),
            //     stan: stanWheel.current.value,
            //     price:Number(priceWheel.current.value)
            // }
            //console.log(updateWheel0)

            console.log(newWheel)
            props.ThunkAddWheel(newWheel)
          //WheelAPI.request('api/product','POST',updateWheel0)

            // props.addwheels(updateWheel)
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
                    <input
                        type="number"
                        onChange={onChangeWheel}
                             value = {newWheel.age}
                             ref={ageWheel}
                    />
                </div>
                <div>
                    <span>radius</span>
                    <input
                        type="number"
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
                    <input
                        type="number"

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