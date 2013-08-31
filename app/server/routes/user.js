var userDatasource = require('../datasources/user');

/*
 * GET users listing.
 */

exports.list = function(req, res){
	var users = userDatasource.list();
	if(users){
		res.jsonp(users);
	}else{
		res.send("no results");
	}
};

exports.findById = function(req, res){
	var user = userDatasource.findById(req.params.id);
	if(user){
		res.jsonp(user);
	}else{
		res.send("no results");
	}
}
