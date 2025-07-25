import express from 'express';
import { grosaryController } from './grosaryproduct.controller';

import { GrosaryZosValidationSchema } from './grosaryproduct.zod';
import validateRequest from '../../middleware/validateRequiest';

const route = express.Router();

route.post(
  '/create-grosary',
  validateRequest(GrosaryZosValidationSchema.createZodGrosarySchema),
  grosaryController.createGrosary,
);
route.get('/', grosaryController.getAllGrosary);
route.get('/:id', grosaryController.getSingleGrosary);
route.patch(
  '/:_id',
  validateRequest(GrosaryZosValidationSchema.updateZodGrosarySchema),
  grosaryController.updateGrosary,
);
route.delete('/:_id', grosaryController.deleteGrosary);

export const GrosaryRoute = route;
