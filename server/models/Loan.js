const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
  amount: {
    required: true,
    type: Number
  },
  apr: {
    required: true,
    type: Number
  },
  owner: {
    type: {
      ref: 'User',
      type: mongoose.Schema.Types.ObjectId
    }
  },
  startDate: {
    required: true,
    type: Date
  },
  term: {
    required: true,
    type: Number
  }
});

module.exports = mongoose.model('Loan', loanSchema);
