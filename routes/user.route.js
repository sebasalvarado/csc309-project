import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  /** GET /api/user - Get list of all users */
  .get(userCtrl.list)

  /** POST /api/user - Create a new user */
  //TODO Add VALIDATION TO CREATE A USER
  .post(userCtrl.create);

router.route('/:userId')
  /** GET /api/user/:userId - Get a user */
  .get(userCtrl.get)

  /**POST /api/user/:userId -Update a User*/
  .post(userCtrl.update)

  /** DELETE /api/user/:userId -Delete a user*/
  .delete(userCtrl.delete);

export default router;
