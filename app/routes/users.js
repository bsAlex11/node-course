"usse strict"

const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const authController = require('../controllers/auth');
const helpersController = require('../helpers');

router.get('/users',
  controller.getUsers,
  helpersController.responseToJson('users')
);

router.get('/users/:userId',
  controller.getUserById,
  helpersController.responseToJson('users')
);

router.post('/users',
  authController.authCheck,
  controller.createUser,
  helpersController.responseToJson('users')
);

router.delete('/users/:userId',
  controller.getUserById,
  controller.deleteUserById,
  helpersController.responseToJson('users')
);

module.exports = router;