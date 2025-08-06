/* eslint-disable @typescript-eslint/no-explicit-any */
// modelMapper.ts
import GrosaryProductModle from '../grosaryproduct/grosaryproduct.modle';
import OfferProductModle from '../OfferProduct/offer.modle';

export const modelMapper: Record<string, any> = {
  grosaryproduct: GrosaryProductModle,
  offerproduct: OfferProductModle,
};
