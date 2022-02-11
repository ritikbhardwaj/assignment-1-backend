const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const loginRoute = require('./src/routes/login');

// Middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// Logging
app.use(morgan('dev'));
// For security headers
app.use(helmet());

// Aggregate routes
app.use('/api/v1/', loginRoute);

module.exports = app;
