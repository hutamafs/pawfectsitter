const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String
});

const User = mongoose.model('qwer',userSchema);
module.exports = User;