import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { adminService } from './admin.service';
import httpStatus from 'http-status';

const getAllAdmin = catchAsync(async (req, res) => {
  const result = await adminService.getAllAdminIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all admin retrive successfully',
    data: result,
  });
});
const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminService.getSingleAdminIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single admin retrive successfully',
    data: result,
  });
});
const updateAdmin = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  const result = await adminService.updateAdminIntoBD(_id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update admin retrive successfully',
    data: result,
  });
});
const deleteAdmin = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await adminService.deleteAdminIntoDB(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'admin data deleted  successfully',
    data: result,
  });
});

export const adminController = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
