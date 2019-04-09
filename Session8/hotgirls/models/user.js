const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: {type: String, required:false},
    dob: {type: Date},
    passwords: {type: String, required :false},
    location: {type:String},
    account: {type:String, required :false, unique:true},
    gender: {type:String},
});

module.exports = mongoose.model('User', UserSchema);