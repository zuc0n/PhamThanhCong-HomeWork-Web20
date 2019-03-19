const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    content: String, 
    Yes: Number,
    No: Number,  
});

module.exports = QuestionSchema;