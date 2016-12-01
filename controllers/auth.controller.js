import passport from '../auth/local';

//authenticate user on login
function login(req, res, next){
    passport.authenticate('local-login', {
        successRedirect: '/view-item',
        failureRedirect: '/',
        failureFlash: true })
    (req, res, next);
}

// process the signup form
function signup(){
    passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true })
    (req, res, next);
}


export default {
    login,
    signup
}