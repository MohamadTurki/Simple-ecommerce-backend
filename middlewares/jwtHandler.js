import jwt from 'jsonwebtoken'
import { HTTP_CODE } from '../utils/statusCodes.js'

export function jwtHandler(req, res, next) {

  const token = req.cookies.JWT_TOKEN

  try {
    if (!token) {
      res.status(HTTP_CODE.UNAUTHORIZED).json("Unauthorized")
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    req.id = decodedToken
    next()
  } catch (error) {
    res.status(HTTP_CODE.UNAUTHORIZED).json("Invalid token")
  }
}
