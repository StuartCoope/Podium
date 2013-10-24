"use strict";

/*
 * GET home page.
 */

exports.index = function(req, res){
	res.jsonp(req.session);
  	//res.render('index', { title: 'Express' });
};