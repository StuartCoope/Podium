"use strict";

var users = angular.module("users", ["users.service", "ui.router"]);

users.config(["$stateProvider", "$routeProvider", function($stateProvider, $routeProvider){

	$stateProvider
		.state("main.register", {
			url: '/register',
			views: {
				'content@': {
					templateUrl: 'users/partials/register.html',
					controller: 'RegisterCtrl'
				}
			}
		})
		.state("main.login", {
			url: '/login',
			views: {
				'content@': {
					templateUrl: 'users/partials/login.html',
					controller: 'LoginCtrl'
				}
			}
		})

}]);
/*
users.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/login", {templateUrl: "users/partials/login.html", controller: "LoginCtrl" })
		.when("/register", {templateUrl: "users/partials/register.html", controller: "RegisterCtrl" })
}]);
*/