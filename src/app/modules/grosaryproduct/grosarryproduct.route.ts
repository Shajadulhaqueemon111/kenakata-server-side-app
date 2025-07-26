import express from 'express';
import { grosaryController } from './grosaryproduct.controller';

import { GrosaryZosValidationSchema } from './grosaryproduct.zod';
import validateRequest from '../../middleware/validateRequiest';
import authValidateRequest from '../../middleware/authValidation';
import { USER_ROLE } from '../user/user.consttant';
import { upload } from '../../utils/sendToimageCloudinary';

const route = express.Router();

route.post(
  '/create-grosary',
  authValidateRequest(USER_ROLE.admin),
  upload.single('image'),
  validateRequest(GrosaryZosValidationSchema.createZodGrosarySchema),
  grosaryController.createGrosary,
);
route.get('/', grosaryController.getAllGrosary);
route.get('/:id', grosaryController.getSingleGrosary);
route.patch(
  '/:id',
  authValidateRequest(USER_ROLE.admin),

  upload.single('image'),
  grosaryController.updateGrosary,
);
route.delete(
  '/:_id',
  authValidateRequest(USER_ROLE.admin),
  grosaryController.deleteGrosary,
);

export const GrosaryRoute = route;
