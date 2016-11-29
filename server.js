var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var routes = require('./routes/routes');

/* User res.render to load up ejs files */
// Set the view engines to ejs
app.set('view engine', 'ejs');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


// required for passport
app.use(session({ secret: 'sharingiscaring' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// show home page
app.get('/', function(req, res) {
    res.render('pages/index.ejs'); // load the index.ejs file
});


// show the login form
app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('pages/login.ejs', { message: req.flash('loginMessage') });
});

// show the signup form
app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
});


/* Get the index page */
app.get('/view-item', function(req, res) {
    res.render('pages/view-item');
});

app.get('/search',function(req, res) {
    res.render('pages/search-item');
});

/* Define all routes, function implementation in routes.js file */


/* start the server */
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
