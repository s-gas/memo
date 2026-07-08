const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRouter = require('./controllers/register');
const config = require('./utils/config');
const logger = require('./utils/logger');

const app = express();

mongoose
  .connect(config.MONGODB_URL)
  .then(() => logger.info("connected to db"))
  .catch(() => logger.info("failed to connect to db"));

app.use(cors());
app.use(express.json());
app.use('/v1/auth/register', registerRouter);

module.exports = app;
