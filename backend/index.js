const express = require('express');
const app = express()
const port = 5000
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  console.error('JWT_SECRET is missing. Please set the environment variable.');
  process.exit(1); 
}

const connectDB = require("./db")
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API started');
});

const authRouter = require("./routes/auth-routes");
const bookRouter = require("./routes/book-routes");
app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });
});
