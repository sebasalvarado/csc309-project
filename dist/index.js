'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _connectFlash = require('connect-flash');

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _index = require('./routes/index.routes');

var _index2 = _interopRequireDefault(_index);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8080;
/* User res.render to load up ejs files */
// Set the view engines to ejs
app.set('view engine', 'ejs');
app.use(_express2.default.static(__dirname + '/assets'));
app.use(_express2.default.static(__dirname + '/'));

app.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// set up our express application
app.use((0, _morgan2.default)('dev')); // log every request to the console
app.use((0, _cookieParser2.default)()); // read cookies (needed for auth)


// required for passport
app.use((0, _expressSession2.default)({ secret: 'sharingiscaring' })); // session secret
app.use(_passport2.default.initialize());
app.use(_passport2.default.session()); // persistent login sessions
app.use((0, _connectFlash2.default)()); // use connect-flash for flash messages stored in session

// Mount all /api routes to index.route.js
app.use('/api', _index2.default);

// show home page

/* Definition for Routing of Views */
/* Get the index page */
app.get('/', function (req, res) {
    res.render('pages/index.ejs'); // load the index.ejs file
});

// show the login form
app.get('/login', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('pages/login.ejs', { message: req.flash('loginMessage') });
});

//authenticate user on login
// app.post('/login',
//     passport.authenticate('local', { successRedirect: '/',
//         failureRedirect: '/login',
//         failureFlash: true })
// );

// show the signup form
app.get('/signup', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
});

/* Get the index page */
app.get('/view-item', function (req, res) {
    res.render('pages/view-item');
});

app.get('/search', function (req, res) {
    res.render('pages/search-item');
});

app.get('/listing', function (req, res) {
    res.render('pages/post-new-listing');
});
/* Define all routes, function implementation in routes.js file */

/* Definition of Routing of back-end. Should start with /api the path */

/* start the server */
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
//# sourceMappingURL=index.js.map
