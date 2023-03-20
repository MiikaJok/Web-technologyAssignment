'use strict';
const express = require('express');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3000;

// log middleware
app.use((req, res, next) => {
   console.log(Date.now() + ": request: " + req.method + "" + req.query)
   next();
});

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

