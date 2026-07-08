const registerRouter = require('express').Router()
const User = require('../models/user')

registerRouter.post('/', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => res.status(201).json(result))
    .catch(() => res.status(400).json({error: "invalid request"}));
});

module.exports = registerRouter
