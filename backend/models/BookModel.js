const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type :String,
    required: true
  },
  image:{
    type :String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    
  },
  price: {
    type: String,
    required: true,  
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
