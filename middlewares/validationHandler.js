import { HTTP_CODE } from '../utils/statusCodes.js'

export function validationHandler(schema) {
  return (req, res, next) => {
    try {
      req.validatedData = schema.parse(req.body)
      next()
    } catch (error) {
      res.status(HTTP_CODE.BAD_REQUEST).json(error.issues[0].message)
    }
  }
}
