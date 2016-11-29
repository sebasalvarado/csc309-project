const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
const authHelpers = require('./auth_helpers');

const pg = require('pg');
pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';


init();

passport.use(new LocalStrategy(options, (username, password, done) => {
    // check to see if the username exists
    const user = findUser(username);

    if (!user) return done(null, false, {message: 'user does not exists.'});
    if (!authHelpers.comparePass(password, user.password)) {
        return done(null, false, {message: 'Incorrect password.'});
    } else {
        return done(null, user);
    }

}));

module.exports = passport;