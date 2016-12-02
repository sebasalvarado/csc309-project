const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
const authHelpers = require('./auth_helpers');
const users = require('../controllers/user.controller');

const pg = require('pg');
pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';


init();

passport.use('local-login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => {
        // check to see if the username exists
        users.findUser(username, req.res, function(user){
            user = JSON.parse(user);
            if (!user.username) return done(null, false, req.flash('loginMessage', 'user does not exists.'));
            //(!authHelpers.comparePass(password, user.password))
            if (password != user.password) {
                console.log(username + ' failed log in. Incorrect password.');
                return done(null, false, req.flash('loginMessage', 'Oops wrong password.'));
            } else {
                console.log(user.username + ' has logged in.');
                return done(null, user);
            }
        });
    }));

passport.use('local-signup', new LocalStrategy({
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, username, password, done) {
        const data = {
            username: req.body.username,
            password: req.body.password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            phonenumber: req.body.phone,
            address: req.body.address,
            email: req.body.email
        };

        users.findUser(username, req.res, function(user){
            user = JSON.parse(user);
            if (user.username){
                return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
            }

            users.validSignUp(data, req.res, function(results){
                //email already exists
                if (results.length == 0){
                    users.createUser(req, req.res, function(user) {
                        if (user){
                            console.log('created new user: ' +  JSON.parse(user));
                            return done(null, JSON.parse(user));
                        }
                    })
                } else {
                    for(let i = 0; i < results.length; i++){
                        if (results[i].email == data.email){
                            return done(null, false, req.flash('signupMessage', 'That email is already in use.'));
                        }
                        else if (results[i].address == data.address){
                            return done(null, false, req.flash('signupMessage', 'That address is already in use.'));
                        }
                        else if (results[i].phonenumber == data.phonenumber){
                            return done(null, false, req.flash('signupMessage', 'That phone number is already in use.'));
                        }
                    }
                }

            });

        });

    }))
;





module.exports = passport;