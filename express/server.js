'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./api/routes');

app.use(bodyParser.json());
app.use('/', routes);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
