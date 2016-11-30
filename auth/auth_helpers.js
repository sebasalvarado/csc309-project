const bcrypt = require('bcryptjs');

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
    pg.connect(connectionString, (err, client, done) => {
        const query = "SELECT ID FROM ShareGoods.User WHERE email = " + email;
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query(query, function (err, qres) {
            if (err) {
                console.log("error getting email");
            }
            else {
                return json(qres.rows);
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
    findUser,
    loginRequired,
    adminRequired
};