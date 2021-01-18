"use strict"

module.exports = {
  initExpress,
}

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

function initExpress(app) {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(function(req, res, next) {
    req.resources = req.resources || {};
    next();
  });
}
