const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
  const port = process.env.PORT || 3000;
  require('./app')(port, db);
});
