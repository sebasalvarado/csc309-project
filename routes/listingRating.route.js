import express from 'express';
import validate from 'express-validation';

import listingRatingCtrl from '../controllers/listings.ratings.controller';

// Initialize the router
const router = express.Router();

router.route('/')
  /** GET all the listing ratings **/
  .get(listingRatingCtrl.get)
  /** POST create e new rating for a given listing**/
  .post(listingRatingCtrl.create);


router.route('/:listingId')
    /** GET Get a given listingId rating**/
    .get(listingRatingCtrl.find)
    /** POST Update a given ratingId **/
    .post(listingRatingCtrl.update)
    /** DELETE delete a given ratingId **/
    .delete(listingRatingCtrl.remove);

export default router;
