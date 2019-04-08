const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId: mongoose.Types.ObjectId, require:true, ref:"User",
    timestamps: true, require:true,
    content: String, require:true,
    imageId: Number, require:true,
});

module.exports = mongoose.model('Comment', CommentSchema);