import { IUser } from './user.interface';
import UserModel from './user.modle';

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

export const userService = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUserIntoDB,
  deleteUserIntoDB,
};
