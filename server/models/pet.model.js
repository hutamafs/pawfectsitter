const mongoose = require('mongoose')

// schema pets
// name : String
// image : String
// gender : String
// age : Integer 
// type : String (dog)
// user_id: ID

const petSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name is required']
    },
    image : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    user_id:{
        type:String,
        required:true
    }

})


module.exports.Pet = mongoose.model("Pet" , petSchema)