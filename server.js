"use strict"

const express = require('express');
const app = express();

const config = require('./config/index');

// express config
require('./config/mongoose').initMongoose();
require('./config/express').initExpress(app);
require('./config/routes').initRoutes(app);
require('./config/errorHandling').errorHandling(app);
require('./config/finalRoute').finalRoute(app);

// end express config


app.listen(config.PORT, () => {
  console.log(`app is running on ${config.PORT}`);
});