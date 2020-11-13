const mongoose = require('mongoose')

const keeperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,   
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    skills: [String],
    status: {
        type: Boolean,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
});

module.exports.Keeper = mongoose.model("Keeper", keeperSchema)