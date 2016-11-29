import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

/** POST /api/auth/login - Returns token if correct username and password **/

router.route('/login')
  .post(authCtrl.login);


export default router;
