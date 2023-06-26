import { z } from 'zod'
import { HTTP_CODE } from '../../utils/statusCodes.js'

const authValidator = (req, res, next) => {
  const { username, password } = req.body

  const schema = z.object({
    username: z.string().min(1).max(50),
    password: z.string().min(1).max(50).regex(/\d/, 'Password must contain at least one number'),
  })

  try {
    const validatedData = schema.parse({ username, password })

    req.validatedData = validatedData

    next()
  } catch (error) {
    res.status(HTTP_CODE.BAD_REQUEST).json(error.issues[0].message)
  }
}

export default authValidator
