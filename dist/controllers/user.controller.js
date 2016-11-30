'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pg2.default.defaults.ssl = true;
var connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

function list(req, res) {
  console.log("HIT");
  return res.send(200);
}

function create(req, res, next) {
  var results = [];
  var data = {
    username: req.body.username,
    password: req.body.password,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    phonenumber: req.body.phone,
    address: req.body.address,
    email: req.body.email
  };
  _pg2.default.connect(connectionString, function (err, client, done) {
    // Handle connection errors
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO ShareGoods.User (username, password, first_name, last_name, phonenumber, address, email) VALUES ($1, $2, $3, $4, $5, $6, $7)', [data.username, data.password, data.first_name, data.last_name, data.phonenumber, data.address, data.email]);
    // SQL Query > Select Data
    var query = client.query('SELECT * FROM ShareGoods.User');
    // Stream results back one row at a time
    query.on('row', function (row) {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function () {
      done();
      return res.json(results);
    });
  });
  res.send(200);
}

exports.default = { create: create, list: list };
module.exports = exports['default'];
//# sourceMappingURL=user.controller.js.map
