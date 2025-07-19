import { TAdmin } from './admin.interface';
import AdminModel from './admin.model';

const getAllAdminIntoDB = async () => {
  const result = await AdminModel.find();

  return result;
};

const getSingleAdminIntoDB = async (_id: string) => {
  const result = await AdminModel.findById(_id);
  return result;
};

const updateAdminIntoBD = async (_id: string, payload: Partial<TAdmin>) => {
  const result = await AdminModel.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAdminIntoDB = async (_id: string) => {
  const result = await AdminModel.findByIdAndDelete(_id);

  return result;
};
export const adminService = {
  getAllAdminIntoDB,
  getSingleAdminIntoDB,
  updateAdminIntoBD,
  deleteAdminIntoDB,
};
