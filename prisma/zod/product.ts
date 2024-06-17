import * as z from "zod"
import * as imports from "../../src/zod-schemas"
import { CompleteCategory, RelatedCategoryModel, CompleteProductToOrder, RelatedProductToOrderModel } from "./index"

export const ProductModel = z.object({
  id: z.string().uuid(),
  name: z.string().max(255, { message: "The title must be shorter than 256 characters" }),
  description: z.string(),
  createdAt: z.date(),
  image: z.string(),
  price: z.number(),
  quantity: z.number().int(),
  updatedAt: z.date(),
  categoryId: z.string(),
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  category: CompleteCategory
  orders: CompleteProductToOrder[]
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductModel.extend({
  category: RelatedCategoryModel,
  orders: RelatedProductToOrderModel.array(),
}))
