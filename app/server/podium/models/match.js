"use strict";

function Match(tournamentId){
	
	this.tournament = tournamentId;
	this.scores = [];
	this.totalScore = 0;
	
	this.addScore = function(userId, score){
		this.totalScore += score;
		this.scores.push({user: userId, score: score});
	}

	this.getTotalScore = function(){
		return this.totalScore;
	}

	this.getScore = function(userId){
		
	}

}
