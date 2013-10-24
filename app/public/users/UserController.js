"use strict";

var users = angular.module("users");

users.controller("LoginCtrl", ["$scope", "$location", "UserService", function($scope, $location, UserService){

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

	$scope.showLogin = function(){
		$location.path("/login");
	};

	$scope.logout = function(){
		UserService.logout();
	}

}]);

users.controller("RegisterCtrl", ["$scope", "UserService", function($scope, UserService){

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

users.controller("LoginSwitch", ["$scope", "UserService", function($scope, UserService){
	
}]);