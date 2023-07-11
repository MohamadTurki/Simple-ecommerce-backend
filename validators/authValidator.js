import { z } from 'zod'

export const userLoginSchema = z.object({
  username: z.string().min(1).max(50),
  password: z.string().min(1).max(50).regex(/\d/, 'Password must contain at least one number'),
})
