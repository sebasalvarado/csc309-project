import passport from '../auth/local';

//authenticate user on login
function login(req, res, next){
    passport.authenticate('local-login', {
        successRedirect: '/view',
        failureRedirect: '/login',
        failureFlash: true })
    (req, res, next);
}

// process the signup form
function signup(req, res, next){
    passport.authenticate('local-signup', {
        successRedirect: '/view',
        failureRedirect: '/signup',
        failureFlash: true })
    (req, res, next);
}


export default {
    login,
    signup
}