import z from 'zod';

const createZodGrosarySchema = z.object({
  body: z.object({
    name: z.string().nonempty('name is requered'),
    category: z.string().nonempty('category is requered'),
    weight: z.string().nonempty('product weight is requered'),
    price: z.string().nonempty('peice is requered'),
    description: z.string().nonempty('description is requered'),
  }),
});
const updateZodGrosarySchema = z.object({
  body: z.object({
    name: z.string().optional(),
    category: z.string().optional(),
    price: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const GrosaryZosValidationSchema = {
  createZodGrosarySchema,
  updateZodGrosarySchema,
};
