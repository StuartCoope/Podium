"use strict";

var express = require('express');

//http://vimeo.com/56166857
var app = module.exports = express();

/**
 * Routes
 */
var routes = require('./routes/index'),
	userRoute = require('./routes/userRoute');


//middleware function that checks if we are logged in
var enforceRole = function(role){
	return function(req, res, next){
		if(req.session.roles.indexOf(role) !== -1){
			next();
		}else{
			res.send(401);
		}
	}
}

app.get('/', routes.index);
app.get('/api/users', enforceRole("admin"), userRoute.list);
app.get('/api/users/:id', enforceRole("admin"), userRoute.findById);
app.get('/api/login/:username/:password', userRoute.login);
app.get('/api/loggedin', userRoute.loggedIn);
app.get('/api/logout', userRoute.logout);
app.get('/api/register', userRoute.register);

