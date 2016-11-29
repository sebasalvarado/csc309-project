var express = require('express');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');

var app = express();

/* User res.render to load up ejs files */
// Set the view engines to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

/* Definition for Routing of Views */
/* Get the index page */
app.get('/', function(req, res) {
    res.render('pages/view-item');
});

app.get('/search',function(req, res) {
    res.render('pages/search-item');
});

/* Define all routes, function implementation in routes.js file */

/* Definition of Routing of back-end. Should start with /api the path */


/* start the server */
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
