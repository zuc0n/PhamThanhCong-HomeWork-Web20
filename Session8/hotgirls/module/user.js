const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: String, require:true,
    dob: Number,
    passwords: String, require:true,
    location: String,
    account: String, require:true, unique:true,
    gender: String,
});

module.exports = mongoose.model('User', UserSchema);