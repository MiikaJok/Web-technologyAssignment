'use strict';
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userConstroller');
module.exports = router;

router.get('/', UserController.getUserList);
router.get('/:userId', UserController.getUser);
router.post('/', UserController.postUser);
//router.put('/', UserController.modifyUser);
//router.delete('/', UserController.deleteUser);

//TODO: add another endpoints needed
//TODO: add validation &