"use strict"

const mongoose = require('mongoose');

module.exports = {
  initMongoose
};

function initMongoose() {
  mongoose.connect('mongodb://127.0.0.1:27017/node', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  const db = mongoose.connection;

  db.on('error', function(err) {
    console.log('error', err);
  });

  db.on('open', function() {
    console.log('coneecteddd');
  });

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);

  function cleanup() {
    mongoose.connection.close(function() {
      process.exit();
    });
  }

}