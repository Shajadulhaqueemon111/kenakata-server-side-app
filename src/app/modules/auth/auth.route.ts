import express from 'express';
import { authController } from './auth.controller';
import { loginZodValidationSchema } from './auth.zodValidation';
import validateRequest from '../../middleware/validateRequiest';
// import authValidateRequest from '../../middleware/authValidation';
// import { USER_ROLE } from '../user/user.consttant';

const router = express.Router();

router.post(
  '/login',
  // authValidateRequest(USER_ROLE.user, USER_ROLE.admin),
  validateRequest(loginZodValidationSchema.loginValidationSchema),
  authController.loginUser,
);
router.post(
  '/refresh-token',
  validateRequest(loginZodValidationSchema.refreshTokenValidationSchema),
  authController.refreshToken,
);
router.post(
  '/logout',

  authController.logout,
);

export const LoginRouetr = router;
