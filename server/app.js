const express = require('express');
const app = express();

const apiErrorHandler = require('./middleware/apiErrorHandler');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser');

module.exports = (port, db) => {
  //Middleware
  app.use(bodyParser.json());

  //Routes
  app.use('/api', apiRoutes);

  //Error handlers
  app.use(apiErrorHandler);

  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
};
