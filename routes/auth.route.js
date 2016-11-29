import express from 'express';
import authCtrl from '../controllers/auth.controller';

const passport = require('passport');
const router = express.Router();
const authHelpers = require('../auth/_helpers');

/** POST /api/auth/login - Returns token if correct username and password **/

router.route('/login')
  .post(authCtrl.login);

router.route('/signup')
    .post(authCtrl.signup);

module.exports = router;

export default router;