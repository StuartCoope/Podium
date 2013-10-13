'use strict';

/* Services */
angular.module('podiumServices', ['ngResource'])
	.factory('UserService', function($resource){

		var loginRequest = $resource('api/login', {}, {});
		var logoutRequest = $resource('api/logout', {}, {});
		var registerRequest = $resource('api/register', {}, {});
		var loginStatusRequest = $resource('api/loginstatus', {}, {});

		var userService = {

			//Consider either:
				//pull defaults from local storage to prevent the flash while waiting for status on load
				//nodeJS to interfere with the serving of index to push some state, how do others do this?

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
			},

			checkLoginStatus: function(){
				loginStatusRequest.get({}, function(res){
					userService.isLoggedIn = res.loggedIn;
					userService.user = res.user;
				});
			},

			logout: function(){
				logoutRequest.get({}, function(res){
					console.log(res);
					if(res.success){
						userService.isLoggedIn = false;
						userService.user = false;
					}
				});
			}
		};

		userService.checkLoginStatus();

		return userService;

	});