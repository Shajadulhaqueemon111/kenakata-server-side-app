import express from 'express';
import { adminController } from './admin.controller';
import validateRequest from '../../middleware/validateRequiest';
import { adminZodValidationSchema } from './admin.zodValidation';

const route = express.Router();

route.get('/', adminController.getAllAdmin);
route.get('/:id', adminController.getSingleAdmin);
route.patch(
  '/:_id',
  validateRequest(adminZodValidationSchema.updateAdminValidationSchema),
  adminController.updateAdmin,
);
route.get('/:_id', adminController.deleteAdmin);
