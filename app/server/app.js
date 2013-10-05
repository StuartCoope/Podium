
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	userRoute = require('./routes/userRoute'),
	http = require('http'),
	path = require('path'),
	app = express(),
    MongoStore = require('express-session-mongo')
    ;

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

//middleware function that checks if we are logged in
var enforceRole = function(role){
	return function(req, res, next){
		if(req.session.roles.indexOf(role) !== -1){
			next();
		}else{
			res.send(401);
		}
	}
}


app.get('/', routes.index);
app.get('/users', enforceRole("admin"), userRoute.list);
app.get('/users/:id', enforceRole("admin"), userRoute.findById);
app.get('/login/:username/:password', userRoute.login);


// route to test if the user is logged in or not 
app.get('/loggedin', function(req, res) { 
	res.send(req.session["loggedIn"] ? req.session["username"] : '0');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



