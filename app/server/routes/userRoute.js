"use strict";

var userDatasource = require('../datasources/userDatasource');
var userController = require('../controllers/userController');

/*
 * GET users listing.
 */

var errorHandler = function(res, err){
	res.jsonp(err);
}

exports.list = function(req, res){
	var users = userDatasource.list(function(users){
		res.jsonp(users);
	}, function(err){
		errorHandler(res, err);
	});
};

exports.findById = function(req, res){
	var user = userDatasource.findById(req.params.id, function(user){
		res.jsonp(user);
	}, function(err){
		errorHandler(res, err);
	});
};

exports.login = function(req, res){
	var username = req.params.username;
	var password = req.params.password;

	var user = userController.login(username, password, function(response){
		req.session.loggedIn = true;
		req.session.username = response.user.username;
		req.session.roles = response.user.roles;
		req.session.loginTime = new Date();

		res.jsonp(response);
	});
};

exports.register = function(req, res){
	userController.register(req.post, function(response){

	}, function(error){
		
	});
	res.send();
};

exports.logout = function(req, res){
	req.session.destroy();
	res.send();
};

// route to test if the user is logged in or not 
exports.loggedIn = function(req, res) { 
	res.send(req.session["loggedIn"] ? 'true' : 'false');
};