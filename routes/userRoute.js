'use strict';
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userConstroller');

router.route('/')
    .get(UserController.getUserList)
    .post(UserController.postUser)
router.route('/:id')
    .get(UserController.getUser)
//router.put('/', UserController.modifyUser);
//router.delete('/', UserController.deleteUser);

//TODO: add another endpoints needed
//TODO: add validation &
module.exports = router;