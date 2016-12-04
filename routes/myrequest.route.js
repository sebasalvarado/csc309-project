import express from 'express';
import validate from 'express-validation';

import userRequestCtrl from '../controllers/userrequest.controller';

const router = express.Router();

router.route('/')
  /** GET /api/user - Get list of all users */
  .get(userRequestCtrl.list)

export default router;
