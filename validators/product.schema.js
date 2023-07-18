import { z } from 'zod'

export const prodAddSchema = z.object({
  title: z.string().min(1).max(20),
  price: z.number().positive(),
  description: z.string().min(1).max(50)
})
