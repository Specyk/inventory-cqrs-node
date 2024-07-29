import { z } from 'zod'

export const changeProductStockLevelSchema = z.object({
  count: z.number().positive('Products value must be min. 1')
});

export type ChangeProductStockLevelBody = z.infer<typeof changeProductStockLevelSchema>