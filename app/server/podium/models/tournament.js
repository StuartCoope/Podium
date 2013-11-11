"use strict";

function Tournament(){

	this.players = [];
	this.matches = [];

	this.addMatch = function(match){
		this.matches.push(match);
	};

	this.addPlayer = function(player){
		this.players.push(player);
	}
}

exports.Tournament = Tournament;