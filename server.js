var http = require('http');
var fs = require('fs');
var pg = require('pg');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var routes = require('./routes/routes');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up to use a session
app.use(cookieParser('SECRET'));
app.use(session({
		secret:'notsosecret'
}));

// Middleware that simplifies the process of parsing and reading the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // Supports URL encoded bodies
	extended:true
}));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
