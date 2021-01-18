"use strict"

const Team = require('../models/teams');

module.exports = {
  createTeam,
  getTeams,
}

function getTeams(req, res, next) {
  // Team.find(function(err, result) {
  //   if (err) {
  //     console.log('error', err);
  //     return res.status(404).json(err);
  //   }
  //   req.resources.teams = result;

  //   return next();
  // })

  Team
    .find()
    .populate('userId', 'email')
    .exec(function(err, result) {
      if (err) {
        console.log('error', err);
        return res.status(404).json(err);
      }
  
      req.resources.teams = result;
      return next();
    });
}

function createTeam(req, res, next) {
  const team = new Team(req.body);

  team.save(function(err, result) {
    if (err) {
      console.log('error', err);
      return res.status(404).json(err);
    }

    req.resources.teams = result;
    return next();
  });  
}