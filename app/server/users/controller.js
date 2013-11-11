"use strict";

var userDatasource = require('./datasource');

var login = function (username, password, callback){
	
	userDatasource.findByUsername(username, function(user){

		if(!user){
			callback({
				success: false,
				message: "Invalid User"
			});

		}else if(user.password == password){
			callback({
				success: true,
				message: "Login success",
				user: user
			});
		
		}else{
			callback({
				success: false,
				message: "Invalid Password"
			});
		}

	}, function(err){

		callback({
			success: false,
			message: "An error occured",
			error: err
		});
	});
};

var register = function(user, callback){
	user.roles = [ "authenticated" ]
	userDatasource.create(user, function(record){
		callback({ success: true});
	}, function(err){
		callback({ success: false, error: err});
	});
};

var list = function(callback){
	userDatasource.list(function(users){
		callback({success:true, users: users});
	}, function(err){
		callback({success: false, error: err});
	});
};

var findById = function(id, callback){
	userDatasource.findById(req.params.id, function(user){
		callback({success:true, user: user});
	}, function(err){
		callback({success: false, error: err});
	})
};

exports.login = login;
exports.register = register;
exports.list = list;
exports.findById = findById;

