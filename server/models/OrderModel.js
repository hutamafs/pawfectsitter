const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number
    },
    keeperName:{
        type:String
    },
    petName:{
        type:String
    },
    petImage:{
        type:String
    },
    keeperImage:{
        type:String
    },
    status:{
        type:Boolean
    },
    timeCreated:{
        type:String
    },
    timeFinished:{
        type:String
    },
    dateCreated:{
        type:String
    },
    dateFinished:{
        type:String
    },
    review:{
        type:String
    },
    keeperId:{
        type:String
    },
})

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;
