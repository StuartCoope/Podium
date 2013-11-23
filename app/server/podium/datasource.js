"use strict";

var mongoose = require('mongoose');

var tournament = require('./models/tournament');

var conn = mongoose.createConnection('mongodb://localhost/podium');

var Schema = mongoose.Schema;

var tournamentSchema = new Schema({
	title: { type: String, required: true},
	created: { type: Date },
	lastModified: { type: Date },
	owner: { type: Schema.Types.ObjectId, ref: 'User'},
	matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
	players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
});

var matchSchema = new Schema({
	title: { type: String, required: true},
	tournamentId: { type: Number, ref: 'Tournament' },
	created: { type: Date },
	lastModified: { type: Date },
	totalScore: { type: Number },
	scores: { type: Array }
});

var playerSchema = new Schema({
	name: { type: String, required: true},
	userId: { type: Number }
});

var TournamentModel = conn.model('Tournament', tournamentSchema);
var PlayerModel = conn.model('Player', playerSchema);
var MatchModel = conn.model('Match', matchSchema);

exports.listTournaments = function(success, errorHandler){
	TournamentModel.find(function(err, tournaments){
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
	TournamentModel.findByid(id, function(err, tournament){
		if(!err){
			success(tournament);
		}else{
			errorHandler(err);
		}
	})
};

exports.createTournament = function(tournament, success, errorHandler){
	var tournament = new TournamentModel(tournament);

	tournament.save(function(err, record, numberAffected){
		console.log(err, record, numberAffected);
	});
};

exports.createMatch = function(match, success, errorHandler){
	var match = new MatchModel(match);

	match.save(function(err, record, numberAffected){
		if(!err){
			success(match);
		}else{
			errorHandler(err);
		}
	});
};

//exports.createTournament({title: "Test"}, function(s){}, function(e){});
//exports.listTournaments(function(t){console.log(t);}, function(e){console.log(e);});




