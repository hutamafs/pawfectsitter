const mongoose = require('mongoose')

const keeperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
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
        minlength: 5,
        maxlength: 255,
    }
});

module.exports.Keeper = mongoose.model("Keeper", keeperSchema)