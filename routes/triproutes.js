const express = require
const {
    retrievaltrips
} = require('../controller/tripcontroller.js');

const triprouter = express.Router();

triprouter
.route ('/')
.get(retrievaltrips);
module.exports = triprouter; 