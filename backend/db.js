const mongoose = require('mongoose');
require("dotenv").config({ path: './.env' });

const URI = process.env.MONGO_URI;

//console.log('MongoDB URI:', URI);

const connectDB = async () => {
    try {
       

        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectDB;