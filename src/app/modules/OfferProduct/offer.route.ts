import express from 'express';
import { OfferController } from './offer.controller';
import validateRequest from '../../middleware/validateRequiest';
import { OfferProducZodtValidationSchema } from './offer.zodvalidation';
import authValidateRequest from '../../middleware/authValidation';
import { USER_ROLE } from '../user/user.consttant';
import { upload } from '../../utils/sendToimageCloudinary';

const route = express.Router();

route.post(
  '/create-offer',
  authValidateRequest(USER_ROLE.admin),
  upload.single('image'),
  validateRequest(OfferProducZodtValidationSchema.createOfferProductZodSchema),
  OfferController.OfferCreate,
);
route.get('/', OfferController.getAllOffers);
route.get('/:id', OfferController.getSingleOffer);
route.patch(
  '/:_id',
  authValidateRequest(USER_ROLE.admin),

  upload.single('image'),
  validateRequest(OfferProducZodtValidationSchema.updateOfferProductZodSchema),
  OfferController.updateOffer,
);
route.delete('/:_id', OfferController.deleteOffer);

export const OfferRoute = route;
