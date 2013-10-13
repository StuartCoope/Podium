'use strict';

/* Services */
angular.module('podiumServices', ['ngResource'])
	.factory('UserService', function($resource){

		var loginRequest = $resource('api/login', {}, {});
		var registerRequest = $resource('api/register', {}, {});

		var userService = {

			isLoggedIn: false,
			user: false,


			login: function(username, password, callback){
			
				loginRequest.save({ 
					username: username, 
					password: password 
				}, function(res){

					if(res.success){
						userService.isLoggedIn = true;
						userService.user = res.user;
					}
					callback(res);
				});

			},

			register: function(user, callback){
				registerRequest.save({
					username: user.username,
					password: user.password,
					email: user.email
				}, function(res){
					if(res.success){

						userService.isLoggedIn = true;
						userService.user = res.user;
						
					}
					callback(res);
				});
			}
		};

		return userService;

	});