// const express = require('express');
// const app = express()
// const port = 5000

// const connectDB = require("./db")
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('API started');
// });

// const authRouter = require("./routes/auth-routes");
// const bookRouter = require("./routes/book-routes");
// app.use("/api/auth", authRouter);
// app.use("/api/book", bookRouter);

// connectDB().then(() => {
//     app.listen(port, () => {
//         console.log(`Server is running on ${port}`);
//     });
// });

const express = require('express');
const app = express();
const port = 5000;

// Load environment variables from a .env file
require('dotenv').config();

// Check if JWT_SECRET is provided
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  console.error('JWT_SECRET is missing. Please set the environment variable.');
  process.exit(1); // Exit the application if the secret is not provided
}

const connectDB = require('./db');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API started');
});

const authRouter = require('./routes/auth-routes');
const bookRouter = require('./routes/book-routes');
app.use('/api/auth', authRouter);
app.use('/api/book', bookRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
