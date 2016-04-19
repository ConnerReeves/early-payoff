const express = require('express');
const router = express.Router();
const loanRoutes = require('./Loan');

router.use('/loans', loanRoutes);

module.exports = router;
