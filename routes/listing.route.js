var express =require('express');
//var validate = require('express-validation');
//var paramValidation = require('../../config/param-validation');
var listingCtrl = require('../controllers/listing.controller');


const router = express.Router();

router.route('/')
  /** GET /api/user - Get list of all users */

  /** POST /api/user - Create a new user */
  //TODO Add VALIDATION TO CREATE A USER
  .post(listingCtrl.create);

module.exports = router;
