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

function createUser(req, callback) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    const data = {
        username: req.body.username,
        password: hash,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        phonenumber: req.body.phone,
        address: req.body.address,
        email: req.body.email
    };

    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return err;
        }
        // SQL Query > Insert Data
        client.query('INSERT INTO ShareGoods.User (username, password, first_name, last_name, phonenumber, address, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [data.username, data.password, data.first_name, data.last_name, data.phonenumber, data.address, data.email],
        function(err, result){
            done();
            if (err){
                console.log (err);
                return (err);
            }else{
                console.log(result);
                callback(stringify(data));
            }
        });

    });
}


function loginRedirect(req, res, next) {
    if (req.user) return res.status(401).json(
        {status: 'You are already logged in'});
    return next();
}


function loginRequired(req, res, next) {
    if (!req.user) {
        req.flash('loginMessage', 'You are not logged in.')
        res.redirect('/login');
    }
    return next();
}



module.exports = {
    comparePass,
    createUser,
    loginRedirect,
    handleErrors,
    handleResponse,
    loginRequired
};
