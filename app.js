// required libraries
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { encode } = require('punycode');
const res = require('express/lib/response');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// twitter streaming api
const { startStream } = require('./services/client');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



/// TEST AREA ///
startStream()


/// END OF TEST AREA ///

module.exports = app;
