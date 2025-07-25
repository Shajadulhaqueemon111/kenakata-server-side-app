import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { GrosaryService } from './grosaryproduct.service';
import httpStatus from 'http-status';
const createGrosary = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await GrosaryService.createGrosaryProductIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'create grosary product successfully',
    data: result,
  });
});
const getAllGrosary = catchAsync(async (req, res) => {
  const result = await GrosaryService.getAllGrosaryProductIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' grosary product retrive successfully',
    data: result,
  });
});
const getSingleGrosary = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await GrosaryService.getSingleGrosaryProductIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' single grosary product retrive successfully',
    data: result,
  });
});
const updateGrosary = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  const result = await GrosaryService.updateGrosaryProductIntoDB(_id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' grosary product update successfully',
    data: result,
  });
});
const deleteGrosary = catchAsync(async (req, res) => {
  const { _id } = req.params;

  const result = await GrosaryService.deleteGrosaryProductIntoDB(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' grosary product delete successfully',
    data: result,
  });
});

export const grosaryController = {
  createGrosary,
  getAllGrosary,
  getSingleGrosary,
  updateGrosary,
  deleteGrosary,
};
