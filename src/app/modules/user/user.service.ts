import mongoose from 'mongoose';

import { IUser } from './user.interface';
import UserModel from './user.modle';
import httpStatus from 'http-status';
import AdminModel from '../admin/admin.model';
import AppError from '../../error/appError';
import { TAdmin } from '../admin/admin.interface';
const createUserIntoDB = async (payload: IUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const getAllUserIntoDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserIntoDB = async (_id: string) => {
  const result = await UserModel.findById(_id);
  return result;
};

const updateUserIntoDB = async (_id: string, payload: Partial<IUser>) => {
  const result = await UserModel.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteUserIntoDB = async (_id: string) => {
  const result = await UserModel.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};
const createAdminIntoDB = async (password: string, payload: TAdmin) => {
  const userData: Partial<IUser> = {
    role: 'admin',
    email: payload.email,
    name: payload.name,
    password,
  };
  console.log(userData);
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const newUser = await UserModel.create([userData], { session });
    console.log(newUser);
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    const adminPayload = {
      ...payload,
      user: newUser[0]._id,

      profileImage: payload.profileImage || undefined,
    };
    console.log('User Created:', newUser[0]);
    console.log('Admin Payload:', adminPayload);

    const newAdmin = await AdminModel.create([adminPayload], { session });
    console.log(newAdmin);
    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    session.endSession();

    return newAdmin[0];
  } catch (err) {
    console.error('Error during admin creation:', err);
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};

export const userService = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUserIntoDB,
  deleteUserIntoDB,
  createAdminIntoDB,
};
