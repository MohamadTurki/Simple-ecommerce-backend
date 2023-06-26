import { HTTP_CODE } from "../utils/statusCodes.js"

const errorHandler = (err, req, res, next) => {
    let errorMessage = 'Internal Server Error'
    
    if (err.statusCode) {
      statusCode = err.statusCode
    }
  
    if (err.message) {
      errorMessage = err.message
    }

    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ Error: errorMessage })
  }
  
export default errorHandler
  