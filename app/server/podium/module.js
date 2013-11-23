"use strict";

var express = require('express'),
	path = require('path');

var utils = require('../lib/utils');

var app = module.exports = express();

/**
 * Default handler
 */
var podiumRouter = require('./router');

app.get('/api/podium/tournaments', podiumRouter.listTournaments);