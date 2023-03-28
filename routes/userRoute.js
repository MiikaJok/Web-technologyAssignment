'use strict';
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userConstroller');
const {body} = require('express-validator');


router.route('/')
    .get(UserController.getUserList)
    .post(
       body('name').isAlphanumeric().isLength({min: 3, max: 100}).escape().trim(),
       body('email').isEmail(),
       body('passwd').isLength({min: 8}), UserController.postUser)

    /*.put(
        body('name').isAlphanumeric().isLength({min: 3, max: 100}).escape().trim(),
        body('email').isEmail(),
        body('passwd').isLength({min: 8}), UserController.modifyUser);*/
    //.delete( UserController.deleteUser);

router.route('/:id')
    .get(UserController.getUser)

module.exports = router;