"use strict";

var podiumDatasource = require('./datasource');

var listTournaments = function(callback){
	podiumDatasource.listTournaments(function(tournaments){
		callback({success:true, tournaments: tournaments});
	}, function(err){
		callback({success: false, error: err});
	});
};

var getTournamentById = function(id, callback){
	podiumDatasource.getTournamentById(id, function(tournaments){
		callback({success:true, tournaments: tournaments});
	}, function(err){
		callback({success: false, error: err});
	});
};



exports.listTournaments = listTournaments;