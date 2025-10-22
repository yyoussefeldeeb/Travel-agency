const express = require('express');
const {
    retrievaltrips,
    createTrip
} = require('../controller/tripcontroller.js');

const triprouter = express.Router();

triprouter
.route ('/')
.get(retrievaltrips)
.post( createTrip);

module.exports = triprouter; 