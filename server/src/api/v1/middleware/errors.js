import { ErrorCode, HttpException } from "../exceptions/root.js";


const errorMiddleware = (error = HttpException, req, res, next) => {
    res.status(error.statuCode).json({
        message: error.message,
        errorCode: error.errorCode,
        errors: error.errors
    })
}

export default errorMiddleware;