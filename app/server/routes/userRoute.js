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
	var username = req.body.username;
	var password = req.body.password;

	performLogin(username, password, req, res);
};

exports.register = function(req, res){
	var user = {
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	}
	
	userController.register(user, function(response){
		if(response.success){
			performLogin(req.body.username, req.body.password, req, res);
		}else{
			if(!response.error.code){
				res.jsonp({success: false, error: "Unable to register"});
				return;
			}
			switch(response.error.code){
				case 11000: 
					res.jsonp({success: false, error: "Username or email already exists"});
					break;
				default:
					res.jsonp({success: false, error: "Unable to register"});
					break;
			}
		}
	});
};

var performLogin = function(username, password, req, res){
	var user = userController.login(username, password, function(response){

		if(response.success){

			req.session.loggedIn = true;
			req.session.username = response.user.username;
			req.session.roles = response.user.roles;
			req.session.loginTime = new Date();
			
			res.jsonp({
				success: true,
				user: {
					id: response.user._id,
					username: response.user.username,
					roles: response.user.roles,
				}
			});

		}else{
			res.jsonp({
				success: false
			});
		}
		
	});
}

exports.logout = function(req, res){
	req.session.destroy();
	res.send();
};

// route to test if the user is logged in or not 
exports.loggedIn = function(req, res) { 
	res.send(req.session["loggedIn"] ? 'true' : 'false');
};