import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { LoginRouetr } from '../modules/auth/auth.route';
import { AdminRout } from '../modules/admin/admin.route';
import { GrosaryRoute } from '../modules/grosaryproduct/grosarryproduct.route';
import { orderRoutes } from '../modules/Order/order.route';
import { paymentRoutes } from '../modules/payments/payment.route';

const router = Router();

const moduleRouter = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/admin',
    route: AdminRout,
  },
  {
    path: '/auth',
    route: LoginRouetr,
  },
  {
    path: '/grosary-product',
    route: GrosaryRoute,
  },
  {
    path: '/order',
    route: orderRoutes,
  },
  {
    path: '/payment',
    route: paymentRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
