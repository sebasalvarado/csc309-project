import express from 'express';

import listingCtrl from '../controllers/listing.controller';

const router = express.Router();

/** GET list of all listings in the system**/
router.route('/')
  .get(listingCtrl.list, listingCtrl.listFilter)
/** POST Add a new listing **/
  .post(listingCtrl.create);

router.route('/:listingID')
  .get(listingCtrl.list)
  .delete(listingCtrl.remove);

export default router;
