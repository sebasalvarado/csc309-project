var express = require('express');
//var userRoutes = require('./user.route');
var listingRoutes = require('./listing.route');
//var requestRoutes = require('./request.route');
//var authRoutes = require('./auth.route');
//var userRatingRoutes = require('./userRating.route');
//var listingRatingRoutes = require('./listingRating.route');


const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
//router.use('/api/user', userRoutes);

// mount auth routes at /auth
//router.use('/auth', authRoutes);
// mount listing routes at /listing
router.use('/api/listing', listingRoutes);

// mount request routes at /request
//router.use('/api/request', requestRoutes);

// mount user rating routes at /user/ratings
//router.use('/api/user/ratings', userRatingRoutes);

// mount listing rating routes at /listing/ratings
//router.use('/api/listing/ratings', listingRatingRoutes);


module.exports = router;
