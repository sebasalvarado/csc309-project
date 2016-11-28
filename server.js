var express = require('express');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

/* Get the index page */
app.get('/', function(req, res) {
    res.sendfile('html/search-item.html');
});

/* Define all routes, function implementation in routes.js file */


/* start the server */
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
