"use strict";

var podiumController = require('./controller.js'),
	utils = require('../lib/utils');


exports.listTournaments = function(req, res){
	podiumController.listTournaments(function(tournaments){
		
		res.jsonp(tournaments);

	}, utils.errorHandler(res));
}

exports.getTournamentById = function(req, res){
	var id = req.params.id;

	podiumController.getTournamentById(id, function(tournament){
		res.jsonp(tournament);
	}, utils.errorHandler(res));
}