"usse strict"

const express = require('express');
const router = express.Router();
const helpersController = require('../helpers');
const teamsController = require('../controllers/teams');

router.get('/teams',
  teamsController.getTeams,
  helpersController.responseToJson('teams')
);

router.post('/teams',
  teamsController.createTeam,
  helpersController.responseToJson('teams')
);

module.exports = router;