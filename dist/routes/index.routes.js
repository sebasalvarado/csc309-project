'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user.route');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import listingRoutes from './listing.route';
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
router.use('/api/user', _user2.default);

// mount auth routes at /auth
//router.use('/auth', authRoutes);
// mount listing routes at /listing
//router.use('/api/listing', listingRoutes);

// mount request routes at /request
//router.use('/api/request', requestRoutes);

// mount user rating routes at /user/ratings
//router.use('/api/user/ratings', userRatingRoutes);

// mount listing rating routes at /listing/ratings
//router.use('/api/listing/ratings', listingRatingRoutes);


exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=index.routes.js.map
