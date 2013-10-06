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

		console.log(arguments);

		return fn.apply(this, arguments);
	}
}

var register = ifValid(userDatasource.create);

exports.login = login;
exports.register = register;