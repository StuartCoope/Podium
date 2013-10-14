'use strict';

/* App Module */
angular.module('test', []).
	config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/test', {templateUrl: 'partials/test.html', controller: "TestCtrl"});
	}]);


angular.module('podium', [
	'podiumServices',
	'test'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/login', {templateUrl: 'partials/login.html', controller: "LoginCtrl" })
		.when('/register', {templateUrl: 'partials/register.html', controller: "RegisterCtrl" })
		.when('/', {templateUrl: 'partials/main.html', controller: "MainCtrl"});
}]);

