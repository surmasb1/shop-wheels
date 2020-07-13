const mongoose = require('mongoose');

const ColSchema = new mongoose.Schema({
    email: String,
    password:String,

});
mongoose.model('Col', ColSchema);

