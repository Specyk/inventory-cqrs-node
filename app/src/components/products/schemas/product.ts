import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().max(50, "Name cannot exceed 50 characters"),
  description: z.string().max(50, "Description cannot exceed 50 characters"),
  price: z.number().nonnegative("Price must be non-negative value"),
  stock: z.number().int().nonnegative("Stock must be a non-negative integer")
});