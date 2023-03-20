'use strict';
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userConstroller');
module.exports = router;

router.get('/', UserController.getUserList);
router.get('/:userId', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/', UserController.modifyUser);
router.delete('/', UserController.deleteUser);