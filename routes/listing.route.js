import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../auth/param-validation';
import listingCtrl from '../controllers/listing.controller';

const router = express.Router();

/** GET list of all listings in the system**/
router.route('/')
  .get(listingCtrl.list)
/** POST Add a new listing **/
  .post(listingCtrl.create);
