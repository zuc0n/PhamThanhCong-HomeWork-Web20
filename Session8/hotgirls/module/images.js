const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    links: String, require:true,
    views: Number, require:true, default:0,
    like: Number, require:true, default:0,
    description: String, 
    titles: String, 
    author: mongoose.Types.ObjectId, require:true, ref:"User",
}, {
    timestamps: true, //createdAt, updatedAt
});

module.exports = mongoose.model('Image', ImagesSchema);