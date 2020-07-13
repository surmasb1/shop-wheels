const mongoose = require('mongoose');

const AllWheels = mongoose.model('AllWheels');

const getAllWheels = (req, res)=>{
    AllWheels.find()
        .exec()
        .then(wheels => res.status(200).json(wheels))
        .catch(err =>res.status(500).json(err));
}
 const CreateWheel = (req, res)=> {
    AllWheels.create({...req.body,cart:false, count:0, id:6, img:'https://i2.rozetka.ua/goods/16232738/171057209_images_16232738754.jpg'})
         .then(createdWheel =>res.status(201).json(createdWheel))
        .catch(err =>res.status(500).json(err));
 };

const UpdateWheel = (req, res)=> {
    AllWheels.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(wheel =>res.json(wheel))
        .catch(err =>res.status(500).json(err));
};

const DeleteWheel = (req, res)=> {
    AllWheels.findOneAndDelete({age: req.params.id})
        .exec()
        .then(() => res.json({success:true}))
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

