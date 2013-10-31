"use strict";

var express = require('express'),
	path = require('path');

//http://vimeo.com/56166857
var app = module.exports = express();

/**
 * Default handler
 */
app.use(express.static(path.join(__dirname, '../public')));