'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _paramValidation = require('../../auth/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

var _user = require('../controllers/user.controller');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//router.route('/')
/** GET /api/user - Get list of all users */
//.get(userCtrl.list)

/** POST /api/user - Create a new user */
//TODO Add VALIDATION TO CREATE A USER
//.post(userCtrl.create);

router.route('/:userId')
/** GET /api/user/:userId - Get a user */
.get(_user2.default.get);

/**POST /api/user/:userId -Update a User*/
//.post(userCtrl.update)

/** DELETE /api/user/:userId -Delete a user*/
//.delete(userCtrl.delete);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=user.route.js.map
