import config from '../../config';

import httpSattus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';
const loginUser = catchAsync(async (req, res) => {
  const result = await authService.LoginUser(req.body);

  const { accessToken, refressToken } = result;
  res.cookie('refreshToken', refressToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    path: '/',
  });
  res.cookie('accessToken', accessToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    path: '/',
  });
  sendResponse(res, {
    statusCode: httpSattus.OK,
    success: true,
    message: 'User is Logged in successfully!',
    data: {
      accessToken,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await authService.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpSattus.OK,
    success: true,
    message: 'AccessToken  is retrive  successfully!',
    data: result,
  });
});

const logout = catchAsync(async (req, res) => {
  const result = await authService.logoutUser(res);
  sendResponse(res, {
    statusCode: httpSattus.OK,
    success: true,
    message: result.message,
    data: null,
  });
});
export const authController = {
  loginUser,
  refreshToken,
  logout,
};
