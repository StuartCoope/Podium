"use strict";

var _ = require('underscore');
/*
username: { type: String, required: true, index: { unique: true, sparse: true } },
password: { type: String, required: true},
email: { type: String, required: true, index: { unique: true, sparse: true } },
lastAccessed: { type: Date },
dateJoined: { type: Date },
roles: { type: Array },
*/
function User(args){
	args = _.extend({
		username: null,
		password: null,
		email: null,
		lastAccessed: new Date(),
		dateJoined: new Date(),
		roles: []
	}, args);



	this.username;
	this.passwordhash;
}