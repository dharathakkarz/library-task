const mongoose = require('mongoose');
require("dotenv").config({ path: './.env' });

const URI = process.env.MONGO_URI;



const connectDB = async () => {
    try {
       

        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1)
    }
};

module.exports = connectDB;