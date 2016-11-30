import express from 'express';
import validate from 'express-validation';

import listingCtrl from '../controllers/listing.controller';

const router = express.Router();

/** GET list of all listings in the system**/
router.route('/')
  .get(listingCtrl.list)
/** POST Add a new listing **/
  .post(listingCtrl.create);

router.route('/:listingID')
  .get(listingCtrl.list)
  .delete(listingCtrl.remove)

export default router;
