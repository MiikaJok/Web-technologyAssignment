'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const getUserList = (req, res) => {
    res.json(users);
};

const createUser = (req, res) => {
    const createUser = req.params.users;
    res.json(createUser)
};

const modifyUser = (req, res) => {
    const modifyUser = req.params.users;
    res.json(modifyUser)
};

const deleteUser = (req, res) => {
    const deleteUser = req.params.users;
    res.json(deleteUser)
};

const getUser = (req, res) => {

    const id = req.params.userId;
    const filteredUsers = users.filter(user => id === user.id);
    console.log(filteredUsers);
    const user = filteredUsers[0];
    if (filteredUsers.length > 0) {
        res.json(filteredUsers[0]);
    } else {
        res.status(404).send("User not found");
    }
    // TODO: filter matching user based on id
    // TODO: send response 404 if id not found in array(res.status(404))
    /*const user = users.find( user => user.id === id);
        if(!user){
            res.status(404).json({message: "User not found"});
            return

        }
        res.json(user)
     */
};

const UserController = {getUserList, getUser, createUser, modifyUser, deleteUser};
module.exports = UserController;