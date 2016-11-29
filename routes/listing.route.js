import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import listingCtrl from '../controllers/listing.controller';

<<<<<<< HEAD
const router = express.Router();

/** GET list of all listings in the system**/
router.route('/')
  .get(listingCtrl.list)
/** POST Add a new listing **/
  .post(listingCtrl.create);
=======

const router = express.Router();

router.route('/')
  /** GET /api/user - Get list of all users */

  /** POST /api/user - Create a new user */
  //TODO Add VALIDATION TO CREATE A USER
  .post(listingCtrl.create);

export default router;
>>>>>>> 0ae4e918980966d9f8c7badd8138e62d3d56ae6d
