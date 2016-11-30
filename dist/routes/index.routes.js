'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user.route');

var _user2 = _interopRequireDefault(_user);

var _listing = require('./listing.route');

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import requestRoutes from './request.route';
//import authRoutes from './auth.route';
//import userRatingRoutes from './userRating.route';
//import listingRatingRoutes from './listingRating.route';


var router = _express2.default.Router();

/** GET /health-check - Check service health */
router.get('/health-check', function (req, res) {
  return res.send('OK');
});

// mount user routes at /user
router.use('/user', _user2.default);

// mount auth routes at /auth
//router.use('/auth', authRoutes);
// mount listing routes at /listing
router.use('/listing', _listing2.default);

// mount request routes at /request
//router.use('/request', requestRoutes);

// mount user rating routes at /user/ratings
//router.use('user/ratings', userRatingRoutes);

// mount listing rating routes at /listing/ratings
//router.use('listing/ratings', listingRatingRoutes);


exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=index.routes.js.map
