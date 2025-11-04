const express = require('express');
const app = express();
const tripsRouter = require('./routes/triproutes');
const usersRouter = require('./routes/userroutes');
const authRouter = require('./routes/authroutes');

app.use(express.json());
app.use('/api/v1/trips', tripsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);


module.exports=
{
    app,
};