const express = require('express');
const router = express.Router();
const Loan = require('../../models/Loan');

router.route('/')
  .post((req, res, next) => {
    //TODO: Attach "owner" based on logged in user (if applicable)
    const loan = new Loan(req.body);
    loan.save((err, loan) => {
      if (err) { return next(err); }
      res.send(loan);
    });
  })

  .get((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
