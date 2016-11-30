'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _paramValidation = require('../../config/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

var _listing = require('../controllers/listing.controller');

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/** GET list of all listings in the system**/
router.route('/').get(_listing2.default.list)
/** POST Add a new listing **/
.post(_listing2.default.create);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=listing.route.js.map
