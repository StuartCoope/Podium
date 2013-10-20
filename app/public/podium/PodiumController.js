"use strict";


var podium = angular.module("podium");

/* Controllers */
podium.controller("MainCtrl", ["$scope", "$routeParams", function($scope, $routeParams){
	
	var content = $routeParams.content;
	if(content == undefined){
		content = "";
	}
	console.log(content);
	$scope.content=content;
}]);

podium.controller("PodiumCtrl" ["$scope", function($scope){
	
}]);


podium.controller("HeaderCtrl" ["$scope", function($scope){
	
}]);


