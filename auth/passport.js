const passport = require('passport');
const authHelpers = require('./auth_helpers');
// expose this function to our app using module.exports
module.exports = () => {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.email);
    });

    // used to deserialize the user
    passport.deserializeUser(function(email, done) {
        //find user by email in database
        authHelpers.findUser(email, (user) => {
            user = JSON.parse(user);
            if (user){
                done(user.email);
            }
        });
    });



};