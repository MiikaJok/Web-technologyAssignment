'use strict';
const userModel = require('../models/userModel');
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

const getUserList = async (req, res) => {
    try {
       const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error){
        res.status(500).json({error: 500, message: error.message})
    }
};

const getUser = async (req, res) => {
    const id = req.params.userId;
    const user = await userModel.getUserById(id)
    if (user) {
        res.json(user);
    } else {
        // send 404 response if user not found
        // res.sendStatus(404);
        res.status(404).json({message: 'User not found.'});
    }
};

const postUser = async (req, res) => {
    console.log('Creating a new user: ', req.body);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.passwd, salt);
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: password,
        role: 1, // default user role (normal user)
    };
    const errors = validationResult(req);
    console.log('validation errors', errors);
    if (errors.isEmpty()) {
        try {
            const result = await userModel.insertUser(newUser);
            res.status(201).json({message: 'user created', userId: result});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    } else {
        res.status(400).json({
            message: 'user creation failed',
            errors: errors.array(),
        });
    }
};

const checkToken = (req, res) => {
    res.json({user: req.user});
};
const UserController = {
    getUserList, getUser, postUser, checkToken,
    //modifyUser,
    //deleteUser,
};
module.exports = UserController;