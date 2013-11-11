"use strict";

//middleware function that checks if we have a given role
exports.enforceRole = function(role){
	return function(req, res, next){
		if(req.session.user.roles.indexOf(role) !== -1){
			next();
		}else{
			res.send(401);
		}
	}
}

exports.errorHandler = function(res){
	var _res = res;

	return function(err){
		_res.jsonp(err);	
	}
}
