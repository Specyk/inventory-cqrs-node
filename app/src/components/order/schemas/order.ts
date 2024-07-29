import { z } from 'zod'

export const productItemSchema = z.object({
  product_id: z.string(),
  count: z.number().positive()
});

export const orderSchema = z.object({
  customer_id: z.string(),
  products: z.array(productItemSchema)
});

export type CreateOrderBody = z.infer<typeof orderSchema>