const express = require('express');
const {
    retrievalltrips,
    createTrip
} = require('../controller/tripcontroller.js');

const triprouter = express.Router();

triprouter
.route ('/')
.get(retrievalltrips)
.post(createTrip);

module.exports = triprouter; 