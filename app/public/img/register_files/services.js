'use strict';

/* Services */
angular.module('podiumServices', ['ngResource'])
	.factory('UserService', function($resource){
		
		return $resource('api/login', {}, {
			login: {
				method: 'POST'
			}
		});
	});