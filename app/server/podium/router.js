"use strict";

var podiumController = require('./controller.js');


exports.listTournaments = function(req, res){
	podiumController.listTournaments(function(tournaments){
		
		console.log(tournaments);
		res.jsonp(tournaments);

	}, utils.errorHandler(res));
}