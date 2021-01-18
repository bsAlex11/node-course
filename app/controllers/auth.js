"use strict"

module.exports = {
  authCheck
};

const isAdmin = true;

function authCheck(req, res, next) {
  if (!isAdmin) {
    return res.send('access denied');
  }
  next();
}