require(["require_jquery", "require_angular"], function($){
	
	window.app = angular.module('podium', [
		'ngCookies', 
		'ngResource', 
		'ui.bootstrap', 
		'ngRoute', 
		'ngff.controllers', 
		'ngff.directives', 
		'ngff.services'
	]);

	//bundling dependencies
	window.angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index']);
	
	window.angular.module('ngff.services', ['ngff.services.global']);
	

	

});