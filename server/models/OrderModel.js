const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id:{
        type:String,
    },
})

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;
