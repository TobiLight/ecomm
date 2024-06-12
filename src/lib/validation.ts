import { coerce, custom, object, string, z } from 'zod';

export const upsertAdminSchema = object({
  id: coerce.number().optional(),
  name: string().min(1).max(256).trim(),
  email: string().email().min(1).max(256).trim(),
  password: string().max(256).trim().optional(),
});

export const userSchema = object({
  id: string(),
  name: string().min(1).max(256).trim().optional(),
  email: string({
    required_error: 'Email field is required',
    invalid_type_error: 'This field must be in email format',
  })
    .email()
    .min(1)
    .max(256)
    .trim(),
  password: string({
    required_error: "Password field is required",
  }).min(6, "Password must be at least 6 characters").max(256).trim(),
  role: z.enum(["user", "admin"]).default("user")
});

export const loginSchema = object({
  email: string().email().min(1).max(256).trim(),
  password: string({
    required_error: "Password field is required",
  }).max(256).trim(),
});

export const upsertProductSchema = object({
  id: string().optional(),
  name: string().min(1).max(256).trim(),
  description: string().min(1).max(256).trim(),
  image: custom(),
  categoryId: string({required_error: "Required"}),
  price: coerce
    .number()
    .positive()
    .default('' as unknown as number),
  quantity: coerce
    .number()
    .positive()
    .default('' as unknown as number),
});

export const upsertCategorySchema = object({
  id: string(),
  name: string().min(1).max(256).trim(),
  image: custom(),
});

export const addToCartSchema = object({
  quantity: coerce
    .number()
    .positive()
    .min(1)
    .default('' as unknown as number),
});

export const updateCartSchema = object({
  quantity: coerce
    .number()
    .positive()
    .default('' as unknown as number)
    .array()
    .min(1),
  product: string()
    .array()
    .min(1),
});

export const createOrderSchema = object({
  id: string(),
  name: string().min(1).max(256).trim(),
  email: string().email().min(1).max(256).trim(),
  phone: string().min(1).max(256).trim(),
  city: string().min(1).max(256).trim(),
  address: string().min(1).max(256).trim(),
});
