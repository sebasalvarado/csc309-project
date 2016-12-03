import express from 'express';
import validate from 'express-validation';
import userRatingCtrl from '../controllers/user.ratings.controller';

// Initialize the router
const router = express.Router();

router.route('/')
  /** GET Fetches all the user ratings from our db **/
  .get(userRatingCtrl.get)
  /** POST Creates a new rating for a user **/
  .post(userRatingCtrl.create);

router.route('/:userId')
  /** GET Get users who rated a user **/
  .get(userRatingCtrl.find)
  /** POST Update the review of a user **/
  .post(userRatingCtrl.update)
  /** DELETE Remove a user rating **/
  .delete(userRatingCtrl.remove);

export default router;
