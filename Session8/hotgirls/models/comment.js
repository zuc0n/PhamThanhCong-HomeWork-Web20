const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, required:true, ref:"User"},
    timestamps: {type: Date},
    content: {type: String, required:true},
    commentId: {type: Number, required:true},
});

module.exports = mongoose.model('Comment', CommentSchema);