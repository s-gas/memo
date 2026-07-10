const handleErrors = (err, req, res, next) => {
  if (err.name === "CastError" || err.name === "ValidationError") return res.status(400).json(err.name);
  
  next(err);
}

module.exports = handleErrors
