import pg from 'pg';
const bcrypt = require('bcryptjs');

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
        firstname: req.body.first - name,
        lastname: req.body.last - name,
        phone: req.body.phone,
        address: req.body.address
    };
}

function findUser(email) {
    let results = [];
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
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            console.log('results 1 ' + results);
            return results;
        });
    });
    console.log('results 2 ' + results);

    return results;
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