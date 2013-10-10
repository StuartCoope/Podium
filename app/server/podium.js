"use strict";

var express = require('express'),
	path = require('path');

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

app.get('/api/users', enforceRole("admin"), userRoute.list);
app.get('/api/users/:id', enforceRole("admin"), userRoute.findById);
app.get('/api/loggedin', userRoute.loggedIn);
app.get('/api/logout', userRoute.logout);

app.post('/api/login', userRoute.login);
app.post('/api/register', userRoute.register);

app.use(express.static(path.join(__dirname, '../public')));