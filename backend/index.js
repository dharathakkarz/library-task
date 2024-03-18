const express = require('express');
const app = express()
const port = 5000
require('dotenv').config();
const cors = require('cors');
app.use(cors());

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  console.error('JWT_SECRET is missing. ');
  process.exit(1); 
}

const connectDB = require("./db")
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API started');
});

//api routes
const authRouter = require("./routes/AuthRoutes");
const bookRouter = require("./routes/BookRoutes");
app.use("/api/auth", authRouter);//for user
app.use("/api/book", bookRouter);//for books

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });
});
