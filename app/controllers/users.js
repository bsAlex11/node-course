"use strict"

const User = require('../models/users');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUserById
}

function getUsers(req, res, next) {
  User.find(function(err, result) {
    if (err) {
      console.log('error', err);
      err.statusCode = 404;
      return next(err);
    }
    req.resources.users = result;

    return next();
  })
}

function getUserById(req, res, next) {
  const { userId } = req.params;
  
  User.findById({ _id: userId }, function(err, result) {
    if (err) {
      err.statusCode = 404;
      return next(err);
    }

    req.resources.users = result;
    return next();
  });
}

function deleteUserById(req, res, next) {
  const { userId } = req.params;

  User.deleteOne({ _id: userId }, function (err, result) {
    if (err) {
      console.log('error', err);
      return res.status(404).json(err);
    }
    return next();
  });
}

function createUser(req, res, next) {  
  const user = new User(req.body);

  user.save(function(err, result) {
    if (err) {
      console.log('error', err);
      err.statusCode = 404;
      return next(err);
    }

    req.resources.users = result;
    return next();
  });  
}
