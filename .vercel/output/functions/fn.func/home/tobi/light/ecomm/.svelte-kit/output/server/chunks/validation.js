import { object, coerce, string, custom } from "zod";
const upsertAdminSchema = object({
  id: coerce.number().optional(),
  name: string().min(1).max(256).trim(),
  email: string().email().min(1).max(256).trim(),
  password: string().max(256).trim().optional()
});
const loginSchema = object({
  email: string().email().min(1).max(256).trim(),
  password: string().max(256).trim()
});
const upsertProductSchema = object({
  id: coerce.number().optional(),
  name: string().min(1).max(256).trim(),
  description: string().min(1).max(256).trim(),
  image: custom(),
  categoryId: coerce.number().positive("Required").default(""),
  price: coerce.number().positive().default(""),
  quantity: coerce.number().positive().default("")
});
const upsertCategorySchema = object({
  id: coerce.number().optional(),
  name: string().min(1).max(256).trim(),
  image: custom()
});
const addToCartSchema = object({
  quantity: coerce.number().positive().min(1).default("")
});
const updateCartSchema = object({
  quantity: coerce.number().positive().default("").array().min(1),
  product: coerce.number().positive().default("").array().min(1)
});
const createOrderSchema = object({
  id: coerce.number().optional(),
  name: string().min(1).max(256).trim(),
  email: string().email().min(1).max(256).trim(),
  phone: string().min(1).max(256).trim(),
  city: string().min(1).max(256).trim(),
  address: string().min(1).max(256).trim()
});
export {
  addToCartSchema as a,
  upsertAdminSchema as b,
  createOrderSchema as c,
  upsertCategorySchema as d,
  upsertProductSchema as e,
  loginSchema as l,
  updateCartSchema as u
};
