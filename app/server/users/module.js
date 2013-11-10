"use strict";

var express = require('express'),
	path = require('path');

//http://vimeo.com/56166857
var app = module.exports = express();

var User = require('./models/User');

/**
 * Routes
 */
var userRoutes = require('./routes');


//middleware function that checks if we are logged in
var enforceRole = function(role){
	return function(req, res, next){
		next();return;
		if(req.session.roles.indexOf(role) !== -1){
			next();
		}else{
			res.send(401);
		}
	}
}

app.get('/api/users', enforceRole("admin"), userRoutes.list);
app.get('/api/users/:id', enforceRole("admin"), userRoutes.findById);
app.get('/api/loginstatus', userRoutes.loginStatus);
app.get('/api/logout', userRoutes.logout);

app.post('/api/login', userRoutes.login);
app.post('/api/register', userRoutes.register);

app.use(express.static(path.join(__dirname, '../public')));