import { Router } from 'express';
import {
  createOrderController,
  deleteOrder,
  getAllOrdersController,
  getAllOredrGrosaryProduct,
  getSingleOrdersController,
  getSingleOredrGraryProduct,
  updateOrderStatus,
} from './order.controller';
import authValidateRequest from '../../middleware/authValidation';
import { USER_ROLE } from '../user/user.consttant';

const router = Router();

router.post('/create', createOrderController);
router.get(
  '/ordered-grosary',
  authValidateRequest(USER_ROLE.admin),
  getAllOredrGrosaryProduct,
);
router.get(
  '/get-all-order-details',
  authValidateRequest(USER_ROLE.admin),
  getAllOrdersController,
);
router.get(
  '/get-single-order-details/:id',
  authValidateRequest(USER_ROLE.admin),
  getSingleOrdersController,
);
router.get(
  '/:id',
  authValidateRequest(USER_ROLE.admin),
  getSingleOredrGraryProduct,
);
router.patch('/:id', authValidateRequest(USER_ROLE.admin), updateOrderStatus);
router.delete('/:id', authValidateRequest(USER_ROLE.admin), deleteOrder);

export const orderRoutes = router;
