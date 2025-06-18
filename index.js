require('dotenv').config();
require('./libs/dbConnect');
const express = require("express");
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT|3000;

require('dotenv').config();
require('./libs/dbConnect');

app.post('/users', createUser);

app.use(morgan('dev'));
