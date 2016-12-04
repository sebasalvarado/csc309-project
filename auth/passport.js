const passport = require('passport');
const users = require('../controllers/user.controller');
// expose this function to our app using module.exports
module.exports = () => {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(req, username, done) {
        //find user by username in database
        users.findUser(username, req.res, (user) => {
            user = JSON.parse(user);
            if (user){
                done(null, user);
            }
        });
    });



};