const mongoose = require('mongoose')
const { Schema } = mongoose;
const jwt = require('jsonwebtoken')



const userSchema = new Schema({
   username: {
    type:String,
    required: true
   },
   email: {
    type:String,
    required: true,
    unique: true
   },
   password: {
    type:String,
    required: true
   },
   phone: {
    type:String,
    required: true
   },
   isAdmin: {
    type:Boolean,
    default: true
   },
   date: {
    type:Date,
    default: Date.now
   },

   
  });

  userSchema.methods.generateToken = function () {
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: '30d' } 
      );
    } catch (error) {
      console.log(error);
    }
  };
  
 

  const User = new mongoose.model( 'User', userSchema );

  module.exports = User