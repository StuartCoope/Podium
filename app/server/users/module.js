"use strict";

var express = require('express'),
	path = require('path');

var utils = require('../lib/utils');

//http://vimeo.com/56166857
var app = module.exports = express();

/**
 * Routes
 */
var userRouter = require('./router');



app.get('/api/users', utils.enforceRole("admin"), userRouter.list);
app.get('/api/users/:id', utils.enforceRole("admin"), userRouter.findById);
app.get('/api/loginstatus', userRouter.loginStatus);
app.get('/api/logout', userRouter.logout);

app.post('/api/login', userRouter.login);
app.post('/api/register', userRouter.register);

app.use(express.static(path.join(__dirname, '../public')));