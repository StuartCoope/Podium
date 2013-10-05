var userDatasource = require('../datasources/userDatasource');

exports.login = function (username, password, callback){
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