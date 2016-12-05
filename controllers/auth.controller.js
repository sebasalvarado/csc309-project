import passport from '../auth/local';

//authenticate user on login
function login(req, res, next){
    passport.authenticate('local-login', { failureFlash: true },
        function(err, user){
            if (err) { return next(err); }

            if (!user){ return res.redirect('/login')}

            req.logIn(user, function(err) {
                if (err) { return next(err); }
                if(user.admin){
                    return res.redirect('/admin');
                }else{
                    return res.redirect('/' + user.username + '/main/');
                }
            });
        })
    (req, res, next);
}



// process the signup form
function signup(req, res, next){
    passport.authenticate('local-signup', {failureFlash: true },
        function(err, user){
            if (err) { return next(err); }

            if (!user){ return res.redirect('/login')}

            req.logIn(user, function(err) {
                if (err) { return next(err); }
                if(user.admin){
                    return res.redirect('/admin');
                }else{
                    return res.redirect('/' + user.username + '/main/');
                }
            });
        })
    (req, res, next);
}


export default {
    login,
    signup
}
