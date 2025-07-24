import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { LoginRouetr } from '../modules/auth/auth.route';
import { AdminRout } from '../modules/admin/admin.route';

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
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
