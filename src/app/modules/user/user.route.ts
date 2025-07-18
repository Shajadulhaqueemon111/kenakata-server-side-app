import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middleware/validateRequiest';
import { zodValidationSchema } from './userZodValidation';

const route = express.Router();

route.post(
  '/create-user',
  validateRequest(zodValidationSchema.createUserZodSchema),
  userController.createUser,
);
route.get('/', userController.getAllUser);
route.get('/:id', userController.getSingleUser);
route.patch('/:_id', userController.updateUser);
route.delete('/:_id', userController.deleteUser);

export const userRouter = route;
