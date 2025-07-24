import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middleware/validateRequiest';
import { zodValidationSchema } from './userZodValidation';
import { adminZodValidationSchema } from '../admin/admin.zodValidation';
import { upload } from '../../utils/sendToimageCloudinary';
import { parseFormDataJSON } from './parsefromdatajson';
import authValidateRequest from '../../middleware/authValidation';
import { USER_ROLE } from './user.consttant';

const route = express.Router();

route.post(
  '/create-user',
  upload.single('file'),
  parseFormDataJSON,
  validateRequest(zodValidationSchema.createUserZodSchema),

  userController.createUser,
);
route.post(
  '/create-admin',
  authValidateRequest(USER_ROLE.admin),
  validateRequest(adminZodValidationSchema.createAdminValidationSchema),
  userController.createAdmin,
);
route.get('/', authValidateRequest(USER_ROLE.admin), userController.getAllUser);
route.get(
  '/:id',
  authValidateRequest(USER_ROLE.admin),
  userController.getSingleUser,
);
route.patch(
  '/:_id',
  authValidateRequest(USER_ROLE.admin),
  upload.single('profileImage'),
  userController.updateUser,
);
route.delete(
  '/:_id',
  authValidateRequest(USER_ROLE.admin),
  userController.deleteUser,
);

export const userRouter = route;
