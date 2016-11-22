var http = require('http');
var fs = require('fs');
var pg = require('pg');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var routes = require('./routes');
var app = express();

pg.defaults.ssl = true; //always keep true!!!
var conString = "postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63";
client = new pg.Client(conString);
client.connect(function(err) {
	//error
	if (err) {
		return console.error('could not connect to postgres', err);
	}
});


app.use(express.static(__dirname + '/src/assets'));
app.use(express.static(__dirname + '/'));

// Middleware that simplifies the process of parsing and reading the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // Supports URL encoded bodies
	extended:true
}));


app.get('/src', function(request, response) {
  response.render('viewitem.html');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
