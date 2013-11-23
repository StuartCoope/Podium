"use strict";

var tournament = angular.module("tournament", ["tournament.service", "ui.router"]);

tournament.config(["$stateProvider", "$routeProvider", function($stateProvider, $routeProvider){

	$stateProvider
		.state("main.tournaments", {
			url: '/tournaments',
			controller: "TournamentListCtrl",
			views: {
				'content@': {
					templateUrl: 'tournaments/partials/tournament-list.html'
				}
			}
		})
	;

}]);