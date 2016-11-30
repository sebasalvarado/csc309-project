'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pg2.default.defaults.ssl = true; /** Get the user
                                   * @returns {Listing}
                                   */

var connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

function create(req, res, next) {
  var results = [];
  var data = {
    email: req.body.email,
    phone: req.body.phone,
    item: req.body.item,
    category: req.body.category,
    description: req.body.description,
    returndate: req.body.returnDate,
    location: req.body.location
  };
  _pg2.default.connect(connectionString, function (err, client, done) {
    // Handle connection errors
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO ShareGoods.listings (email, phone, item, category, description, returndate, location) VALUES ($1, $2, $3, $4, $5, $6, $7)', [data.email, data.phone, data.item, data.category, data.description, data.returndate, data.location]);
    // SQL Query > Select Data
    var query = client.query('SELECT * FROM ShareGoods.listings');
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
}

exports.default = { create: create };
module.exports = exports['default'];
//# sourceMappingURL=listing.controller.js.map
