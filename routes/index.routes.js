import express from 'express';
import userRoutes from './user.route';
import listingRoutes from './listing.route';
//import requestRoutes from './request.route';
import authRoutes from './auth.route';
import requestRoutes from './request.route';
//import authRoutes from './auth.route';
import userRatingRoutes from './userRating.route';
import listingRatingRoutes from './listingRating.route';


const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
router.use('/user', userRoutes);

// mount auth routes at /auth

router.use('/auth', authRoutes);


// mount listing routes at /listing
router.use('/listing', listingRoutes);
// router.use('/listing', listingRoutes);

// mount request routes at /request
router.use('/request', requestRoutes);

// mount user rating routes at /user/ratings
router.use('/ratings/user', userRatingRoutes);

// mount listing rating routes at /listing/ratings
router.use('/ratings/listing', listingRatingRoutes);


export default router;
