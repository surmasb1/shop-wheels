const mongoose = require('mongoose');

const AllWheelsSchema = new mongoose.Schema({
    id:String,
    marka: String,
    price: Number,
    radius:Number,
    age: Number,
    stan:String,
    cart: Boolean,
    count: Number,
    hide: Boolean,
    img: String
});
mongoose.model('AllWheels', AllWheelsSchema);

