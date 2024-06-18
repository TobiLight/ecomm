import * as z from "zod"
import { CompleteProduct, RelatedProductModel, CompleteCategory, RelatedCategoryModel } from "./index"

export const ProductCategoriesModel = z.object({
  productID: z.string(),
  categoryID: z.string(),
})

export interface CompleteProductCategories extends z.infer<typeof ProductCategoriesModel> {
  product: CompleteProduct
  category: CompleteCategory
}

/**
 * RelatedProductCategoriesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductCategoriesModel: z.ZodSchema<CompleteProductCategories> = z.lazy(() => ProductCategoriesModel.extend({
  product: RelatedProductModel,
  category: RelatedCategoryModel,
}))
