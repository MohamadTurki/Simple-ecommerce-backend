import { z } from 'zod'
import { HTTP_CODE } from '../../utils/statusCodes.js'

const authValidator = (req, res, next) => {
  const { title, price, description } = req.body

  const schema = z.object({
    title: z.string().min(1).max(20),
    price: z.number().positive(),
    description: z.string().min(1).max(50)
  })

  try {
    const validatedData = schema.parse({ title, price, description })

    req.validatedData = validatedData

    next()
  } catch (error) {
    res.status(HTTP_CODE.BAD_REQUEST).json(error.issues[0].message)
  }
}

export default authValidator
