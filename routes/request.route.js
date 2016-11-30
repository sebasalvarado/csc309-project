import express from 'express';
import validate from 'express-validation';
import requestCtrl from '../controllers/request.controller';

const router = express.Router();

/** GET list of all listings in the system**/
router.route('/')
  .get(requestCtrl.list)
/** POST Add a new listing **/
  .post(requestCtrl.create);

router.route('/:requestID')
  .get(requestCtrl.list)
  .delete(requestCtrl.remove)

export default router;
