'use strict';

/* Services */
angular.module('podiumServices', ['ngResource'])
	.factory('UserService', function($resource){
		
		return {
			Login: $resource('api/login', {}, {}),
			Register: $resource('api/register', {}, {})
		}
	});