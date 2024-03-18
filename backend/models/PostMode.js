const mongoose = require('mongoose');
const { Schema } = mongoose;

const personalPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PersonalPost = mongoose.model('PersonalPost', personalPostSchema);

module.exports = PersonalPost;
