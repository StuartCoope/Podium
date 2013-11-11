"use strict";

var mongoose = require('mongoose');

var tournament = require('./models/tournament');

var conn = mongoose.createConnection('mongodb://localhost/podium');

var Schema = mongoose.Schema;

var tournamentSchema = new Schema({
	matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
	players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
});

var matchSchema = new Schema({
	tournamentId: { type: Number, ref: 'Tournament' },
	totalScore: { type: Number },
	scores: { type: Array }
});

var playerSchema = new Schema({
	userId: { type: Number }
});

var Tournament = conn.model('Tournament', tournamentSchema);
var Player = conn.model('Player', playerSchema);
var Match = conn.model('Match', matchSchema);

exports.listTournaments = function(success, errorHandler){
	Tournament.find(function(err, tournaments){
		if(!err){
			success(tournaments);
		}else{
			if(errorHandler){
				errorHandler(err);
			}
		}
	});
};

exports.getTournamentById = function(id, success, errorHandler){
	Tournament.findByid(id, function(err, tournament){
		if(!err){
			success(tournament);
		}else{
			errorHandler(err);
		}
	})
};

exports.createTournament = function(tournament, success, errorHandler){
	var tournament = new Tournament(tournament);

	tournament.save(function(err, record, numberAffected){
		console.log(err, record, numberAffected);
	});
};

exports.createMatch = function(match, success, errorHandler){
	var match = new Match(match);

	match.save(function(err, record, numberAffected){
		if(!err){
			success(match);
		}else{
			errorHandler(err);
		}
	});
};

//exports.createTournament({}, function(s){}, function(e){});
//exports.listTournaments(function(t){console.log(t);}, function(e){console.log(e);});




