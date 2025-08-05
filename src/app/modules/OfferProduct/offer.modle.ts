import { model, Schema } from 'mongoose';
import { IOfferProduct } from './offer.interface';

const OfferProductSchema = new Schema<IOfferProduct>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  rating: {
    type: String,
  },
  offerPercent: {
    type: String,
    required: true,
  },
});

const OfferProductModle = model<IOfferProduct>(
  'OfferProduct',
  OfferProductSchema,
);

export default OfferProductModle;
