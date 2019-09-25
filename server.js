const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const homeRoute = require('./routes/home');

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);

app.listen(4000);