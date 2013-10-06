"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true},
	lastAccessed: { type: Date },
	dateJoined: { type: Date },
	roles: { type: Array },
})

var User = mongoose.model('User', userSchema);

exports.list = function (success, errorHandler){
	User.find(function (err, users){
		if(!err){
			console.log(users);
			success(users);
		}else{
			if(errorHandler){
				errorHandler(err);
			}
		}
	});
}

exports.findById = function (id, success, errorHandler){
	User.findById(id, function(err, user){
		if(!err){
			success(user);
		}else{
			errorHandler(err);
		}
	})
}

exports.findByUsername = function(username, success, errorHandler){
	User.findOne({ 'username': username }, function(err, user){
		if(!err){
			success(user);
		}else{
			errorHandler(err);
		}
	});
}

exports.create = function (user, success, errorHandler){
	var user = new User(user);

	user.save(function(err){
		if(err){
			errorHandler(err);
		}else{
			success();
		}
	});
}

