const handleErrors = (err, req, res, next) => {
  if (err.name === "CastError" || err.name === "ValidationError") return res.status(400).json(err.name);
  if (err.code === 11000 && err.keyValue) {
    const keys = Object.keys(err.keyValue);
    return res.status(409).json({err: `${keys[0]} already exists`})
  }
  next(err);
}

module.exports = handleErrors
