import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../auth/param-validation';
import requestCtrl from '../controllers/request.controller';


const router = express.Router();

router.route('/')
  /** GET /api/request Get all the requests that we have**/
  .get(requestCtrl.list)
  /** POST /api/request Create a new request**/
  .post(requestCtrl.create);

router.route('/:requestId')
  /** GET /api/request/:requestId Get a given request by Id **/
  .get(requestCtrl.get)
  /** DELET /api/request/:requestId delete a given request by ID **/
  .delete(requestCtrl.delete);
