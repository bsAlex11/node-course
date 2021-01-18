"use strict"

module.exports = {
  getCurrentDate,
  responseToJson,
};

function getCurrentDate() {
  return new Date();
}

function responseToJson(item) {
  return function(req, res, next) {
    return res.json(req.resources[item]);
  };
}