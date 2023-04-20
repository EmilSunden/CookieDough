const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// package middlewares
app.use(cors());
app.use(express.json());

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost/${PORT}`)
})