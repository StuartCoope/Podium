'use strict';

var test = angular.module("test");

test.controller("TestCtrl", ['$scope', function($scope){
	alert("TestCtrl");
}]);

var podium = angular.module("podium");

/* Controllers */
podium.controller("MainCtrl", ['$scope', function($scope){
	
}]);

podium.controller("PodiumCtrl" ['$scope', function($scope){
	
}]);

podium.controller("LoginCtrl", ['$scope', 'UserService', function($scope, UserService){

	$scope.loginForm = {};
	$scope.errorMessage = false;

	$scope.UserService = UserService;

	$scope.login = function(){
		
		UserService.login($scope.loginForm.username, $scope.loginForm.password, function(res){
			if(!res.success){
				$scope.errorMessage = "<strong>Oh no!</strong> Invalid username or password";
			}else{
				//success, clear the form now in case it is reused later
				$scope.loginForm.username = "";
				$scope.loginForm.password = "";
			}
		});

	};

	$scope.logout = function(){
		UserService.logout();
	}

}]);

podium.controller('RegisterCtrl', ['$scope', 'UserService', function($scope, UserService){

	$scope.registrationForm = {};
	$scope.errorMessage = false;

	$scope.UserService = UserService;

	$scope.register = function(){
		UserService.register({
			username: $scope.registrationForm.username,
			password: $scope.registrationForm.password,
			email: $scope.registrationForm.email
		}, function(res){
			if(!res.success){
				$scope.errorMessage = res.error;
			}else{
				//success, clear the form now in case it is reused later
				$scope.registrationForm.username = "";
				$scope.registrationForm.password = "";
				$scope.registrationForm.email = "";
			}
		});
	}

	$scope.logout = function(){
		UserService.logout();
	}

}]);
