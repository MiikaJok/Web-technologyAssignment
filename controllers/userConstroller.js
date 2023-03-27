'use strict';
const userModel = require('../models/userModel');

const getUserList = async (req, res) => {
    try {
       const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error){
        res.status(500).json({error: 500, message: error.message})
    }
};
const postUser = async (req, res) => {
    // console.log('req body', req.body);
    try {
        const newUser = req.body;
        const result = await userModel.insertUser(newUser);
        res.status(201).send("Added user " + req.body.name);
    } catch(error){
        res.status(400).json({error: 500, message: error.message})
    }
};

const getUser = async (req, res) => {
    // convert id value to number
    const userId = Number(req.params.id);
    // check if number is not an integer
    if (!Number.isInteger(userId)) {
        res.status(400).json({error: 500, message: 'invalid id'});
        return;
    }
    try {
        const [user] = await userModel.getUserById(userId);
        res.json(user);
    } catch (error){
        res.status(400).json({error: 500, message: error.message})
    }
};
const UserController = {
    getUserList, getUser, postUser
    //modifyUser,
    //deleteUser,
};
module.exports = UserController;