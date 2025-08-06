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
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const GrosaryProductModle = model<TGrosaryproduct>(
  'grosaryproduct',
  GrosaryProductSchema,
);

export default GrosaryProductModle;
