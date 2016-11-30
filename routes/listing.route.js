import express from 'express';
import validate from 'express-validation';
import listingCtrl from '../controllers/listing.controller';

const router = express.Router();

/** GET list of all listings in the system**/
router.route('/')
  .get(listingCtrl.list)
/** POST Add a new listing **/
  .post(listingCtrl.create);

<<<<<<< HEAD
router.route('/:listingID')
  .get(listingCtrl.list)
  .delete(listingCtrl.remove)

=======
>>>>>>> e7395314294cb289b6b28a9e6ffcc2d1342d1027
export default router;
