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
}

exports.login = function(req, res){
	var username = req.params.username;
	var password = req.params.password;

	var user = userController.login(username, password, function(response){
		req.session.loggedIn = true;
		req.session.loggedInUser = response.user.username;
		req.session.roles = response.user.roles;

		console.log(response.user.username);

		res.jsonp(response);
	});

}