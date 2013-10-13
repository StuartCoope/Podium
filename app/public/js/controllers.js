'use strict';

/* Controllers */
var MainCtrl = ['$scope', function($scope){
	
}];

var LoginCtrl = ['$scope', 'UserService', function($scope, UserService){

	$scope.loginForm = {};
	$scope.errorMessage = false;

	$scope.UserService = UserService;

	$scope.login = function(){
		
		UserService.login($scope.loginForm.username, $scope.loginForm.password, function(res){
			if(!res.success){
				$scope.errorMessage = "<strong>Oh no!</strong> Invalid username or password";
			}
		});

	};
}];

var RegisterCtrl = ['$scope', 'UserService', function($scope, UserService){

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
			}
		});
	}
}];

var PodiumCtrl = ['$scope', function($scope){
	
}];