import { HTTP_CODE, HttpResError } from "../utils/statusCodes.js"
import { Prisma } from '../utils/db.js'

export const errorHandler = (rawErr, req, res, next) => {
  // let errorMessage = 'Internal Server Error'
  // let statusCode = HTTP_CODE.INTERNAL_SERVER_ERROR

  // if (err.statusCode) {
  //   statusCode = err.statusCode
  // }


  if (rawErr instanceof Prisma.PrismaClientKnownRequestError) {
    let err
    if (rawErr.code === 'P2002') {
      err = new HttpResError(HTTP_CODE.CONFLICT, undefined, { ...rawErr.meta })
    } else if (rawErr.code === 'P2003') {
      err = new HttpResError(HTTP_CODE.BAD_REQUEST, undefined, { reason: rawErr.message })
    } else if (rawErr.code == 'P2005') {
      err = new HttpResError(HTTP_CODE.BAD_REQUEST, undefined, { reason: rawErr.message })
    } else if (rawErr.code === 'P2006') {
      err = new HttpResError(HTTP_CODE.BAD_REQUEST, undefined, { reason: rawErr.message })
    } else if (rawErr.code === 'P2007') {
      err = new HttpResError(HTTP_CODE.INTERNAL_SERVER_ERROR, undefined, { reason: rawErr.message })
    } else if (rawErr.code === 'P2012') {
      err = new HttpResError(HTTP_CODE.BAD_REQUEST, undefined, { reason: rawErr.message })
    } else if (rawErr.code === 'P2011') {
      err = new HttpResError(HTTP_CODE.BAD_REQUEST, undefined, { reason: rawErr.message })
    } else if (rawErr.code === 'P2019') {
      err = new HttpResError(HTTP_CODE.BAD_REQUEST, undefined, { reason: rawErr.message })
    } else if (rawErr.code === 'P2025') {
      err = new HttpResError(HTTP_CODE.NOT_FOUND, undefined, { reason: rawErr.message })
    } else {
      err = new HttpResError(HTTP_CODE.INTERNAL_SERVER_ERROR, undefined, { reason: rawErr.message })
    }
    if (err) return res.status(err.code).send(err.json())
  }

  res.status(HTTP_CODE.BAD_REQUEST).json(rawErr)
  next()
}
