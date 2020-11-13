const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true,'email has been used'],
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    address:{
        type:String,
        required:[true,'address is required'],
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;
