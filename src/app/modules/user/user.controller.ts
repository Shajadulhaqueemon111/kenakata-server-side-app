import AppError from '../../error/appError';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sendImageToCloudinary } from '../../utils/sendToimageCloudinary';
import { IUser } from './user.interface';
import { userService } from './user.service';
import httpStatus from 'http-status';
import fs from 'fs/promises';
const createUser = catchAsync(async (req, res) => {
  const { name, email, password, role } = req.body;

  const fileBuffer = req.file?.buffer;

  if (!fileBuffer) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Profile image is required');
  }

  const cloudinaryResponse = await sendImageToCloudinary(
    fileBuffer,

    `profile-${Date.now()}`,
  );

  const imageUrl = cloudinaryResponse.secure_url;

  const userData: IUser = {
    name,
    email,
    password,
    profileImage: imageUrl,
    role,
    isDeleted: false,
  };

  const result = await userService.createUserIntoDB(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await userService.getAllUserIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrive successfully',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.getSingleUserIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrive successfully',
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  if (req.file?.path) {
    // ফাইল path থেকে Buffer তৈরি করা
    const fileBuffer = await fs.readFile(req.file.path);

    const imageName = `user-${_id}`;
    const imageUrl = await sendImageToCloudinary(fileBuffer, imageName);

    payload.profileImage = imageUrl;
  }

  const result = await userService.updateUserIntoDB(_id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user updated successfully',
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await userService.deleteUserIntoDB(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user deleted successfully',
    data: result,
  });
});
const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;
  console.log(req.body);
  console.log('Admin Data:', adminData);
  const result = await userService.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin Created is successfully',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createAdmin,
};
