import express from 'express';
import authCtrl from '../controllers/auth.controller';
const router = express.Router();
const authHelpers = require('../auth/auth_helpers');

/** POST /api/auth/login - Returns token if correct username and password **/

router.route('/login')
  .post(authCtrl.login);

router.route('/signup')
    .post(authCtrl.signup);

router.route('/*')
    .get(authHelpers.loginRedirect);

module.exports = router;

export default router;
