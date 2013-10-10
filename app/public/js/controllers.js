'use strict';

/* Controllers */
var MainCtrl = ['$scope', function($scope){
	console.log($scope);
}];

var LoginCtrl = ['$scope', 'UserService', function($scope, UserService){
	$scope.login = function(){

		UserService.Login.save({ 
			username: $scope.username, 
			password: $scope.password 
		}, function(res){
			$scope.loggedIn = true;
		});

	};
}];

var RegisterCtrl = ['$scope', 'UserService', function($scope, UserService){
	$scope.register = function(){

		UserService.Register.save({
			username: $scope.username,
			password: $scope.password,
			email: $scope.email
		}, function(res){
			$scope.loggedIn = true;
			console.log(res);
		});
	}
}];

var PodiumCtrl = ['$scope', function($scope){
	console.log("PodiumCtrl created");
}];