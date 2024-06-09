import * as z from "zod"
import * as imports from "../../src/zod-schemas"
import { CompleteProductToOrder, RelatedProductToOrderModel } from "./index"

export const OrderModel = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  city: z.string(),
  address: z.string(),
  total: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteOrder extends z.infer<typeof OrderModel> {
  products: CompleteProductToOrder[]
}

/**
 * RelatedOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderModel: z.ZodSchema<CompleteOrder> = z.lazy(() => OrderModel.extend({
  products: RelatedProductToOrderModel.array(),
}))
