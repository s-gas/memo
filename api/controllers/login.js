const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({username});
  if (!user) {
    return res.status(401).json({error: "invalid username"});
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPasswordCorrect) {
    return res.status(401).json({error: "invalid password"});
  }

  console.log("username and password are correct");
  return res.status(200).end();
})

module.exports = loginRouter;
