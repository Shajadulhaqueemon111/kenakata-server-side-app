import { IOfferProduct } from './offer.interface';
import OfferProductModel from './offer.modle';

const createOfferProductIntoDB = async (payload: IOfferProduct) => {
  const result = await OfferProductModel.create(payload);
  return result;
};

const getAllOfferProductsFromDB = async () => {
  const result = await OfferProductModel.find();
  return result;
};

const getSingleOfferProductFromDB = async (_id: string) => {
  const result = await OfferProductModel.findById(_id);
  return result;
};

const updateOfferProductInDB = async (
  _id: string,
  payload: Partial<IOfferProduct>,
) => {
  const result = await OfferProductModel.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteOfferProductFromDB = async (_id: string) => {
  const result = await OfferProductModel.findByIdAndDelete(_id);
  return result;
};

export const OfferProductService = {
  createOfferProductIntoDB,
  getAllOfferProductsFromDB,
  getSingleOfferProductFromDB,
  updateOfferProductInDB,
  deleteOfferProductFromDB,
};
