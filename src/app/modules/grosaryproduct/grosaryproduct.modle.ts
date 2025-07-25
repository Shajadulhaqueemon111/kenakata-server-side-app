import { model, Schema } from 'mongoose';
import { TGrosaryproduct } from './grosaryproduct.interface';

export const GrosaryProductSchema = new Schema<TGrosaryproduct>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const GrosaryProductModle = model<TGrosaryproduct>(
  'Grosaryproduct',
  GrosaryProductSchema,
);

export default GrosaryProductModle;
