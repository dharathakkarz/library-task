const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
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
