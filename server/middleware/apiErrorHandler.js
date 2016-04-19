module.exports = (err, req, res, next) => {
  if (err) {
    console.error(err);

    if (err.name === 'ValidationError') {
      return res.sendStatus(422);
    }

    return res.sendStatus(500);
  }

  next();
};
