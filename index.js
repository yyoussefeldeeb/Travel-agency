const express = require('express');
const app = express();
const tripsRouter = require('./routes/triproutes');

app.use(express.json());
app.use('/api/v1/trips', tripsRouter); 


module.exports=
{
    app,
};