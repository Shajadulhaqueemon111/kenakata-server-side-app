import { TGrosaryproduct } from './grosaryproduct.interface';
import GrosaryProductModle from './grosaryproduct.modle';

const createGrosaryProductIntoDB = async (payload: string) => {
  const result = await GrosaryProductModle.create(payload);
  return result;
};
const getAllGrosaryProductIntoDB = async () => {
  const result = await GrosaryProductModle.find();
  return result;
};
const getSingleGrosaryProductIntoDB = async (_id: string) => {
  const result = await GrosaryProductModle.findById(_id);
  return result;
};
const updateGrosaryProductIntoDB = async (
  _id: string,
  payload: Partial<TGrosaryproduct>,
) => {
  const result = await GrosaryProductModle.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteGrosaryProductIntoDB = async (_id: string) => {
  const result = await GrosaryProductModle.findByIdAndDelete(_id);
  return result;
};
export const GrosaryService = {
  createGrosaryProductIntoDB,
  getAllGrosaryProductIntoDB,
  getSingleGrosaryProductIntoDB,
  updateGrosaryProductIntoDB,
  deleteGrosaryProductIntoDB,
};
