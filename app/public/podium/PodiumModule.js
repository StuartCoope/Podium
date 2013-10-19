"use strict";

var podium = angular.module("podium", ["users"]);

podium.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/", {templateUrl: "podium/partials/main.html", controller: "MainCtrl"})
		.when("/:content", {templateUrl: "podium/partials/main.html", controller: "MainCtrl" });
}]);

