const express = require('express');
const { retrieveAllUsers, createUser } = require('../controller/usercontroller.js');

const userrouter = express.Router();

userrouter
.route('/')
.get(retrieveAllUsers)
.post(createUser);

module.exports = userrouter;