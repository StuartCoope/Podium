"use strict";

/* Services */
angular.module("tournament.service", ["ngResource"], function($provide){
	$provide.factory("TournamentService", function($resource){
		


		return $resource("api/podium/tournaments", {}, {
			list: {method:'GET'}
		});

	});

});