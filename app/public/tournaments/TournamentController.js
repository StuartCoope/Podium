"use strict";


var tournament = angular.module("tournament");

/* Controllers */
tournament.controller("TournamentCtrl", ["$scope", "$routeParams", function($scope, $routeParams){

}]);

tournament.controller("TournamentListCtrl", ["$scope", "$routeParams", "TournamentService", function($scope, $routeParams, TournamentService){

	var tournamentList = TournamentService.list(function(res){
		$scope.tournaments = res.tournaments;
		console.log($scope.tournaments);
	});
	
}]);

tournament.controller("TournamentDetailCtrl", ["$scope", "$routeParams", "TournamentService", function($scope, $routeParams, TournamentService){

	var tournamentList = TournamentService.details($routeParams.tournamentId, function(res){
		$scope.tournament = l.tournament;
	});
	
}]);
