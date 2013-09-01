var userDatasource = require('../datasources/user');

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
}
