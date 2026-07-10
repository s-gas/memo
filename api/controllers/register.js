const bcrypt = require('bcrypt')
const registerRouter = require('express').Router()
const User = require('../models/user')

registerRouter.post('/', async (req, res) => {
  const {email, username, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    username,
    hashedPassword,
  })

  const result = await user.save()
  res.status(201).json(result);
});

module.exports = registerRouter
