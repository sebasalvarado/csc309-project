const passport = require('passport');

//authenticate user on login
function login(){
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true })
}

// process the signup form
function signup(){
    passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true })
}


export default {
    login,
    signup
}