const registerRouter = require('express').Router()
const User = require('../models/user')

registerRouter.post('/', async (req, res) => {
  const user = new User(req.body);
  const result = await user.save()
  res.status(201).json(result);
});

module.exports = registerRouter
