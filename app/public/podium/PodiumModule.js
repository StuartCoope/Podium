"use strict";

var podium = angular.module("podium", [
	"users",
	"ui.router"
]);

podium.config(["$stateProvider", "$routeProvider", function($stateProvider, $routeProvider) {

	$stateProvider
		.state("main", {
			url: '',
			abstract: true,
			views: {
				'header': {
					templateUrl: 'podium/partials/header.html',
					controller: 'MainCtrl'
				}
			}
		})
		.state("main.home", {
			url: '/',
			views: {
				'content@': {
					templateUrl: 'podium/partials/main.html'
				}
			}
		})
		.state("main.list", {
			url: '/list',
			views: {
				'content@': {
					templateUrl: 'podium/partials/list.html'
				}
			}
		})
		.state("main.notfound", {
			url: "*path",
			templateUrl: "podium/partials/not-found.html"
		})

}]);

