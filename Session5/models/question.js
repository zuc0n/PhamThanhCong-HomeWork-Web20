const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;


const QuestionSchema = new Schema({
    content: { type: String, unique: true, required: true, default: 'Question'}, 
    Yes: Number,
    No: Number,  
});

module.exports = model('question', QuestionSchema);