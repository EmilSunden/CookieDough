const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// package middlewares
app.use(cors());
app.use(express.json());


const { authRouter } = require('./routes/authRoutes/authRoutes');
app.use('/', authRouter);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost/${PORT}`)
})