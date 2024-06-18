import * as z from "zod"
import { CompleteOrder, RelatedOrderModel, CompleteProduct, RelatedProductModel } from "./index"

export const ProductToOrderModel = z.object({
  id: z.string(),
  productID: z.string(),
  orderID: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProductToOrder extends z.infer<typeof ProductToOrderModel> {
  order: CompleteOrder
  product: CompleteProduct
}

/**
 * RelatedProductToOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductToOrderModel: z.ZodSchema<CompleteProductToOrder> = z.lazy(() => ProductToOrderModel.extend({
  order: RelatedOrderModel,
  product: RelatedProductModel,
}))
