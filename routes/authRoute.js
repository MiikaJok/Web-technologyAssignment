'use strict';
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authController = require('../controllers/authController');
const {postUser} = require("../controllers/userConstroller");

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post(
    '/register',
    body('name').isLength({ min: 3 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('passwd').isLength({ min: 8 }).trim(),
    postUser
);

module.exports = router;