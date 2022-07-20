require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Conn = require('./db/connection.js');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ extended: true, limit: '50mb' }));

const {StudentRoutes} = require('./rotues/index.js');
app.use('/student',StudentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})