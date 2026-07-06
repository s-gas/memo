const express = require('express');
const cors = require('cors');
const app = express();
const registerRouter = require('./controllers/register');

app.use(cors());
app.use(express.json());
app.use('/v1/auth/register', registerRouter);

module.exports = app;
