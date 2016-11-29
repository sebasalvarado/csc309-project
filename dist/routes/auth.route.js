'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../controllers/auth.controller');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passport = require('passport');
var router = _express2.default.Router();
var authHelpers = require('../auth/_helpers');

/** POST /api/auth/login - Returns token if correct username and password **/

router.route('/login').post(_auth2.default.login);

router.route('/signup').post(_auth2.default.signup);

module.exports = router;

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=auth.route.js.map
