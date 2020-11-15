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
    }
})

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;
