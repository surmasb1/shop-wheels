const mongoose = require('mongoose');

const ColSchema = new mongoose.Schema({
    email: String,
    password:String,
    login: String

});
mongoose.model('Col', ColSchema);

