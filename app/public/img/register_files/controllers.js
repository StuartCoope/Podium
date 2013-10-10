'use strict';

/* Controllers */
var LoginCtrl = ['$scope', 'UserService', function($scope, UserService){
	$scope.login = function(){
		//console.log(UserService.login);
		UserService.login({ username: $scope.username, password: $scope.password }, function(res){
			console.log(res);
		});

	};
}];

var RegisterCtrl = ['$scope', 'UserService', function($scope, UserService){
	$scope.register = function(){
		UserService.register({}, function(res){
			console.log(res);
		});
	}
}];

var PodiumCtrl = ['$scope', function($scope){
	console.log("PodiumCtrl created");
}];