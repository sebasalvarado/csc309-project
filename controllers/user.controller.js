import pg from 'pg';
import bcrypt from 'bcryptjs';

pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

function list(req, res){
  const results = [];
  pg.connect(connectionString, (err, client, done) => {
   // Handle connection errors
   if (err) {
     done();
     console.log(err);
     return res.status(500).json({success: false, data: err});
   }
   const query = client.query("select * from sharegoods.user;");
   query.on('row', (row) => {
     results.push(row);
   });
   // After all data is returned, close connection and return results
   query.on('end', () => {
     done();
     console.log("queried");
     return res.json(results);
   });
 });
 }
function create(req, res, next) {
    const results = [];
>>>>>>> edf68e80fc5b03e952128859423f42c5b8678d7f
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
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Insert Data
        const query = client.query('INSERT INTO ShareGoods.User (username, password, first_name, last_name, phonenumber, address, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [data.username, data.password, data.first_name, data.last_name, data.phonenumber, data.address, data.email]);

        // SQL Query > Select Data
        const query = client.query('SELECT id FROM ShareGoods.User WHERE username = $1', [data.username]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            res.statusCode = 200;
            callback(JSON.stringify(data));
        });
    });
}

function validSignUp(user, res, callback){
    const results = [];
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        const query = client.query("SELECT * FROM ShareGoods.User WHERE email =($1) or address = ($2) or phonenumber = ($3)",
            [user.email, user.address, user.phonenumber]);

>>>>>>> e83af6f855fc13ac59712cc530b703fae9353f7b
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            res.statusCode = 200;
            if (results.length > 0){
                callback(results);
            }else{
                callback(results);
            }

        });
    });
}

export default {createUser, findUser, list, validSignUp};
