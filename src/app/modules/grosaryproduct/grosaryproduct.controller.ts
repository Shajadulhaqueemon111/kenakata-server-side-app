import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sendImageToCloudinary } from '../../utils/sendToimageCloudinary';
import { GrosaryService } from './grosaryproduct.service';
import httpStatus from 'http-status';

const createGrosary = catchAsync(async (req, res) => {
  const payload = req.body;

  if (req.file?.buffer) {
    const imageUrl = await sendImageToCloudinary(
      req.file.buffer,
      `product-${Date.now()}`,
    );

    payload.image = imageUrl.secure_url;
  }

  const result = await GrosaryService.createGrosaryProductIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' grosary product create successfully',
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
  const { id } = req.params;
  let payload = req.body;

  if (req.file?.buffer) {
    const fileBuffer = req.file.buffer;
    const imageName = `product-${id}`;
    const imageUrl = await sendImageToCloudinary(fileBuffer, imageName);

    payload = {
      ...payload,
      image: imageUrl.secure_url,
    };
  }

  const result = await GrosaryService.updateGrosaryProductIntoDB(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Grosary product updated successfully',
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
