import express from 'express';
import userRoutes from './user.route';
import listingRoutes from './listing.route';
import requestRoutes from './request.route';
import authRoutes from './auth.route';


const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
router.use('/api/user', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);
// mount listing routes at /listing
router.use('/api/listing', listingRoutes);

// mount request routes at /request
router.use('/api/request', requestRoutes);


export default router;
