const express = require('express');
const { signup, compareUser } = require('../controller/authcontroller.js');

const authrouter = express.Router();

authrouter
.route('/signup')
.post(signup);

authrouter
.route('/login')
.post(compareUser);

module.exports = authrouter;
