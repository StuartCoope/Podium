'use strict';

/* App Module */
angular.module('podium', [
	'podiumServices'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/login', {templateUrl: 'partials/login.html', controller: LoginCtrl })
		.when('/register', {templateUrl: 'partials/register.html', controller: RegisterCtrl })
		.when('/', {templateUrl: 'partials/main.html', controller: PodiumCtrl});
}]);
