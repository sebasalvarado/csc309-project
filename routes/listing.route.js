import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../auth/param-validation';
import listingCtrl from '../controllers/listing.controller';


const router = express.Router();

router.route('/')
  /** GET /api/user - Get list of all users */

  /** POST /api/user - Create a new user */
  //TODO Add VALIDATION TO CREATE A USER
  .post(listingCtrl.create);

export default router;
