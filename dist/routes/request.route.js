'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _paramValidation = require('../../config/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

var _request = require('../controllers/request.controller');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/')
/** GET /api/request Get all the requests that we have**/
.get(_request2.default.list)
/** POST /api/request Create a new request**/
.post(_request2.default.create);

router.route('/:requestId')
/** GET /api/request/:requestId Get a given request by Id **/
.get(_request2.default.get)
/** DELET /api/request/:requestId delete a given request by ID **/
.delete(_request2.default.delete);
//# sourceMappingURL=request.route.js.map
