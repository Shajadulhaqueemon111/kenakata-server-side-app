import { model, Schema } from 'mongoose';
import { TAdmin } from './admin.interface';

const AdminSchema = new Schema<TAdmin>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const AdminModel = model<TAdmin>('Admin', AdminSchema);

export default AdminModel;
