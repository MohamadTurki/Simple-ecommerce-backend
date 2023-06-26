import { HTTP_CODE } from "../utils/statusCodes.js"

const errorHandler = (err, req, res, next) => {
    let errorMessage = 'Internal Server Error'
    let statusCode = HTTP_CODE.INTERNAL_SERVER_ERROR
    
    if (err.statusCode) {
      statusCode = err.statusCode
    }
  
    if (err.message) {
      errorMessage = err.message
    }

    res.status(statusCode).json({ Error: errorMessage })
}
  
export default errorHandler
