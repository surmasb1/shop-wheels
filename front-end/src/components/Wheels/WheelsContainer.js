import React from 'react';
import {connect} from "react-redux";
import Wheels from "./Wheels";
//import {addWheel, minuswheel} from "../../redux/cart-reducer";
import {addCount, changeCart, minusCount, setWheels, WheelsToLow, WheelsToUp,setIsFetching} from "../../redux/wheel-reducer";
import axios from "axios";
import Preloader from "../common/Preloder/Preloder";
import {getwheels} from "../../api/api";


class WheelsContainer extends React.Component {

    componentDidMount() {
        // const arrWheel=[
        //     {
        //         marka: 'nokian1',
        //         age:10,
        //         radius:16,
        //         stan: 'good',
        //         price:55,
        //         id: 1,
        //         cart:false,
        //         count:0 ,
        //         hide: false,
        //         img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'
        //     },
        //     {   marka: 'rossava1',
        //         age:8,
        //         radius:17,
        //         stan: 'good',
        //         price:35,
        //         id: 2,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjlCFqqTCH80LkUvDJywVMvwYzQAbnMNhAEzUR_EtH9ecbBDe&usqp=CAU'
        //     },
        //     {   marka: 'michelin1',
        //         age:5,
        //         radius:18,
        //         stan: 'soso',
        //         price:60,
        //         id: 3,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://rezina.cc/products/thumbs/000/009/923/9923_240x240.jpg?v=1588246642'
        //     },
        //     {   marka: 'Bridgestone1',
        //         age:7,
        //         radius:19,
        //         stan: 'ифв',
        //         price:20,
        //         id: 4,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://i1.rozetka.ua/goods/3737330/34826895_images_3737330371.jpg'
        //     },
        //     {   marka: 'hankook1',
        //         age:12,
        //         radius:19,
        //         stan: 'bad',
        //         price:15,
        //         id: 5,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://shinadiski.com.ua/uploads/models/tyre/2426_1.jpg'
        //     },
        //     {
        //         marka: 'nokian2',
        //         age:10,
        //         radius:16,
        //         stan: 'good',
        //         price:43,
        //         id: 6,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'
        //     },
        //     {   marka: 'rossava2',
        //         age:8,
        //         radius:17,
        //         stan: 'good',
        //         price:25,
        //         id: 7,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjlCFqqTCH80LkUvDJywVMvwYzQAbnMNhAEzUR_EtH9ecbBDe&usqp=CAU'
        //     },
        //     {   marka: 'michelin2',
        //         age:5,
        //         radius:20,
        //         stan: 'soso',
        //         price:48,
        //         id: 8,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://rezina.cc/products/thumbs/000/009/923/9923_240x240.jpg?v=1588246642'
        //     },
        //     {   marka: 'Bridgestone2',
        //         age:7,
        //         radius:20,
        //         stan: 'ифв',
        //         price:56,
        //         id: 9,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://i1.rozetka.ua/goods/3737330/34826895_images_3737330371.jpg'
        //     },
        //     {   marka: 'hankook2',
        //         age:12,
        //         radius:18,
        //         stan: 'bad',
        //         price:54,
        //         id: 10,
        //         cart:false,
        //         count: 0,
        //         hide: false,
        //         img:'https://shinadiski.com.ua/uploads/models/tyre/2426_1.jpg'
        //     }
        //
        // ];
        this.props.setIsFetching(true)
        getwheels()
            .then(response => {
                this.props.setIsFetching(false)
                if(this.props.wheels.length===0){this.props.setWheels(response.data)} ;

            })




    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>:
            <Wheels wheels={this.props.wheels}
                    //addwheel={this.props.addWheel}
                   // minuswheel={this.props.minuswheel}
                    changeCart={this.props.changeCart}
                    minusCount={this.props.minusCount}
                    addCount={this.props.addCount}
                    WheelsToUp={this.props.WheelsToUp}
                    WheelsToLow={this.props.WheelsToLow}

            />}
        </>
    }
}

let mapStateToProps = (state) => ({

        wheels: state.wheeldata.wheels,
    isFetching: state.wheeldata.isFetching

})


export default connect(mapStateToProps, { changeCart,addCount,minusCount,WheelsToUp,WheelsToLow,setWheels,setIsFetching})(WheelsContainer);