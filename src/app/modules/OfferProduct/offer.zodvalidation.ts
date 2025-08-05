import { z } from 'zod';

export const createOfferProductZodSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    category: z.string().nonempty('Category is required'),
    price: z.string().nonempty('Price is required'),
    weight: z.string().nonempty('Weight is required'),
    description: z.string().nonempty('Description is required'),
    // image: z.string().nonempty('Image is required'),
    rating: z.string().nonempty('rating is required'),
    offerPercent: z.string().nonempty('Offer percent is required'),
  }),
});
export const updateOfferProductZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    category: z.string().optional(),
    price: z.string().optional(),
    weight: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    offerPercent: z.string().optional(),
  }),
});
export const OfferProducZodtValidationSchema = {
  createOfferProductZodSchema,
  updateOfferProductZodSchema,
};
