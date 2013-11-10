"use strict";

/**
 * Module dependencies.
 */
var express = require('express'),
	http = require('http'),
	path = require('path'),
    MongoStore = require('express-session-mongo');

/**
 * Internal Dependencies
 */
var	users = require('./users/module'),
	podium = require('./podium/module');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');

app.set('view engine', 'jade');
app.set('view options', {layout: true});

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ 
	store: new MongoStore(),
	secret: 'securedsession'
}));

app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/app/public'));
app.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(users);
app.use(podium);

//Default handler
app.use(express.static(path.join(__dirname, '../public')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

