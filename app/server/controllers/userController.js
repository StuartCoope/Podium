"use strict";

var userDatasource = require('../datasources/userDatasource');

var login = function (username, password, callback){
	
	userDatasource.findByUsername(username, function(user){

		if(!user){
			callback({
				success: false,
				message: "Invalid User"
			});

		}else if(user.password == password){
			console.log(user);
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
}

var ifValid = function(fn){
	return function(){

		if(arguments.length === 0){
			return;
		}
		
		return fn.apply(this, arguments);
	}
}

var register = function(user, callback){
	user.roles = [ "authenticated" ]
	userDatasource.create(user, function(record){
		callback({ success: true});
	}, function(err){
		callback({ success: false, error: err});
	});
}

exports.login = login;
exports.register = register;


