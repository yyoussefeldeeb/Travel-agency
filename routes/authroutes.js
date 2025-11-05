const express = require('express');
const { signup, login } = require('../controller/authcontroller.js');

const authrouter = express.Router();

authrouter
.route('/signup')
.post(signup);

authrouter
.route('/login')
.post(login);

module.exports = authrouter;
