import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sendImageToCloudinary } from '../../utils/sendToimageCloudinary';
import { OfferProductService } from './offer.service';
import httpStatus from 'http-status';

// Create offer product
const OfferCreate = catchAsync(async (req, res) => {
  const payload = req.body;
  if (req.file?.buffer) {
    const imageUrl = await sendImageToCloudinary(
      req.file.buffer,
      `product-${Date.now()}`,
    );

    payload.image = imageUrl.secure_url;
  }
  const result = await OfferProductService.createOfferProductIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offer product created successfully',
    data: result,
  });
});

// Get all offer products
const getAllOffers = catchAsync(async (req, res) => {
  const result = await OfferProductService.getAllOfferProductsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All offer products retrieved successfully',
    data: result,
  });
});

// Get single offer product by ID
const getSingleOffer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferProductService.getSingleOfferProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offer product retrieved successfully',
    data: result,
  });
});

// Update offer product by ID
const updateOffer = catchAsync(async (req, res) => {
  const { _id } = req.params;
  let payload = req.body;

  if (req.file?.buffer) {
    const fileBuffer = req.file.buffer;
    const imageName = `product-${_id}`;
    const imageUrl = await sendImageToCloudinary(fileBuffer, imageName);

    payload = {
      ...payload,
      image: imageUrl.secure_url,
    };
  }
  const result = await OfferProductService.updateOfferProductInDB(_id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offer product updated successfully',
    data: result,
  });
});

// Delete offer product by ID
const deleteOffer = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await OfferProductService.deleteOfferProductFromDB(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offer product deleted successfully',
    data: result,
  });
});

export const OfferController = {
  OfferCreate,
  getAllOffers,
  getSingleOffer,
  updateOffer,
  deleteOffer,
};
