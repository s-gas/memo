const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');
const config = require('./utils/config');
const logger = require('./utils/logger');
const handleErrors = require('./utils/middleware');

const app = express();

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL)
    logger.info("connected to db")
  } catch (err) {
    logger.error("failed to connect to db", err);
    process.exit(1);
  }
})()

app.use(cors());
app.use(express.json());

app.use('/v1/auth/register', registerRouter);
app.use('/v1/auth/login', loginRouter);

app.use(handleErrors);

module.exports = app;
