"use strict";
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();


const login = (req, res) => {
    // TODO: add passport authenticate
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            console.log("auth error", info);
            return res.status(401).json({
                message: 'username / password wrong',
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.json({message: err});
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, process.env.JWT_SECRET);
            return res.json({user, token});
        });
    })(req, res);
};

const logout = (req,res) => {
    res.json({message: "Logged out"})
}
module.exports = {
    login,
    logout,
};