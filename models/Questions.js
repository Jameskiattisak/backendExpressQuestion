const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  value: String,
  isTrue: Boolean,
});

const questionSchema = new mongoose.Schema({
  question: String,
  answer:[answerSchema],
},{ collection: 'questions' });

const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions;
