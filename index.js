const express  = require('express');
const app      = express();
const port     = process.env.PORT || 8080;
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const routes = require('./routes/index.routes');
const authHelpers = require('./auth/auth_helpers');


/* User res.render to load up ejs files */
// Set the view engines to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


// required for passport
app.use(session({secret: 'sharingiscaring'})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
/* Definition of Routing of back-end. Should start with /api the path */
app.use('/api', routes);
// show home page

/* Definition for Routing of Views */
/* Get the index page */


app.get('/', function (req, res) {
    res.render('pages/index.ejs'); // load the index.ejs file
});

// show the login form
app.get('/login', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('pages/login.ejs', {message: req.flash('loginMessage')});
});

// show the signup form
app.get('/signup', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('pages/signup.ejs', {message: req.flash('signupMessage')});
});

app.get ('/*', function(req, res, next){
    authHelpers.loginRequired(req, res, next);
});

app.get('/main', function (req,res){
   res.redirect('main/' + req.user.username);
});

app.get('/:username/main', function(req, res){
  res.render('pages/main.ejs', {username:req.params.username}); // Load main page
});

app.get('/:username/profile', function(req, res){
  res.render('pages/profile.ejs', {username:req.params.username}); // Load main page
});



//log out
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

/* Get the view item page */

app.get('/:username/view/:id', function(req, res){
  res.render('pages/view-item',{username: req.params.username});
});

/* Get the search item page */
app.get('/:username/search',function(req, res) {
    res.render('pages/search-item',{username:req.params.username});
});

/* Get the post new listing page */
app.get('/:username/listing',function(req, res) {
    res.render('pages/post-new-listing',{username:req.params.username});
});

/* Get the request a listing page */
app.get('/:username/request/:id',function(req, res) {
    res.render('pages/product-request',{username:req.params.username});
});

/* Get the my requests page */
app.get('/:username/my-requests',function(req,res){
  res.render('pages/my-product-requests', {username: req.param.username});
})
/* Get the requests submitted to my products*/
app.get('/:username/requests',function(req,res){
  res.render('pages/requests',{username:req.params.username});
})
/* Admin main page */
app.get('/admin', function(req,res){
  res.render('pages/admin/main');
});
/* Admin detailed page */
app.get('/admin/index/user', function(req,res){
  res.render('pages/admin/index');
});

app.get('/admin/index/listing',function(req,res){
  res.render('pages/admin/index');

});


/* start the server */
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
