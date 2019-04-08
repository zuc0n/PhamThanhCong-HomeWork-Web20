const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: {type: String, required:true},
    dob: {type: Date},
    passwords: {type: String, required :true},
    location: {type:String},
    account: {type:String, required :true, unique:true},
    gender: {type:String},
});

module.exports = mongoose.model('User', UserSchema);