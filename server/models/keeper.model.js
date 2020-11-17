const mongoose = require('mongoose')

const keeperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'keeper name is required'],
    },
    email: {
        type: String,
        required: [true,'keeper email is required'],
        unique:true 
    },
    image: {
        type: String,
        required: [true,'keeper image is required']
    },
    rating: {
        type:Number,
        required: [true,'keeper rating is required']
    },
    price:{
        hourly:{
            type:Number,
            required: [true,'keeper price hourly is required']
        },
        daily:{
            type:Number,
            required: [true,'keeper price daily is required']
        },
        weekly:{
            type:Number,
            required: [true,'keeper price weekly is required']
        },
    },
    skills: [String],
    status: {
        type: String,
        required: [true,'keeper status is required']
    },
    address: {
        type: String,
        required: [true,'keeper address is required']
    },
    review:[String]
});

module.exports.Keeper = mongoose.model("Keeper", keeperSchema)