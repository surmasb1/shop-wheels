const mongoose = require('mongoose');
import { v4 as uuidv4 } from 'uuid';
const AllWheels = mongoose.model('AllWheels');

const getAllWheels = (req, res)=>{
    AllWheels.find()
        .exec()
        .then(wheels => res.status(200).json(wheels))
        .catch(err =>res.status(500).json(err));
}
 const CreateWheel = async (req, res)=> {
    let idw= await AllWheels.collection.find().count()
    // console.log(req.body)
     //console.log(uuidv4() )
    AllWheels.create({...req.body,cart:false, count:0, id:uuidv4(), img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'})
         .then(createdWheel =>res.status(201).json(createdWheel))
        .catch(err =>res.status(500).json(err));
 };

const UpdateWheel = (req, res)=> {
    AllWheels.findOneAndUpdate({id: req.params.id}, req.body)
        .then(wheel =>{res.json(wheel)
        })
        .catch(err =>res.status(501).json(err));
};

const DeleteWheel = (req, res)=> {
   const a= AllWheels.findOneAndDelete({id: req.params.id})
        .exec()
        .then(() => res.json(a))
        .catch(err =>res.status(500).json(err));
};

const GetOneWheel =  (req, res)=> {
    AllWheels.findOne({id:req.params.id})
        .exec()
        .then(wheel => res.json(wheel))
        .catch(err =>res.status(500).json(err));
};

module.exports = {
    getAllWheels,
    CreateWheel,
    UpdateWheel,
    DeleteWheel,
    GetOneWheel,
}

