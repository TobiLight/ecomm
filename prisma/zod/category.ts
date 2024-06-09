import * as z from "zod"
import * as imports from "../../src/zod-schemas"
import { CompleteProduct, RelatedProductModel } from "./index"

export const CategoryModel = z.object({
  id: z.string().uuid(),
  name: z.string().max(255, { message: "The title must be shorter than 256 characters" }),
  image: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  products: CompleteProduct[]
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() => CategoryModel.extend({
  products: RelatedProductModel.array(),
}))
