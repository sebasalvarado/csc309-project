import pg from 'pg';
import stringify from 'json-stringify';
import bcrypt from 'bcryptjs';

pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';


function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function handleErrors(req) {
    return new Promise((resolve, reject) => {
        if (req.body.username.length < 6) {
            reject({
                message: 'Username must be longer than 6 characters'
            });
        }
        else if (req.body.password.length < 6) {
            reject({
                message: 'Password must be longer than 6 characters'
            });
        } else {
            resolve();
        }
    });
}

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}

function createUser(req) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    return {
        email: req.body.email,
        password: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        address: req.body.address
    };
}

function findUser(email, callback) {
    let results = {'username': '', 'password': ''};
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return err;
        }
        const query = client.query("SELECT email, password FROM ShareGoods.User WHERE email =($1)", [email]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.username = row.email;
            results.password = row.password;
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            callback(stringify(results));
        });
    });
}

function loginRedirect(req, res, next) {
    if (req.user) return res.status(401).json(
        {status: 'You are already logged in'});
    return next();
}


function loginRequired(req, res, next) {
    if (!req.user) return res.status(401).json({status: 'Please log in'});
    return next();
}

function adminRequired(req, res, next) {
    if (!req.user) res.status(401).json({status: 'Please log in'});
    return knex('users').where({username: req.user.username}).first()
        .then((user) => {
            if (!user.admin) res.status(401).json({status: 'You are not authorized'});
            return next();
        })
        .catch((err) => {
            res.status(500).json({status: 'Something bad happened'});
        });
}


module.exports = {
    comparePass,
    createUser,
    loginRedirect,
    handleErrors,
    handleResponse,
    findUser,
    loginRequired,
    adminRequired
};