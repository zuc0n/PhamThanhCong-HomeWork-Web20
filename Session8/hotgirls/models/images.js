const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    links: {type: String, required: false},
    views: {type: Number, default:0},
    like: {type: Number, default:0},
    description: {type: String}, 
    titles: {type: String, required: false}, 
    author: {type: mongoose.Types.ObjectId, required:false, ref:"User"},
}, {
    timestamps: {type: Date}, //createdAt, updatedAt
});

module.exports = mongoose.model('Image', ImagesSchema);