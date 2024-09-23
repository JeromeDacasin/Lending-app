import {HttpException} from './root.js'

class BadRequestsException extends HttpException {
    constructor(message, errorCode) {
        super(message, errorCode, 400, null)
    }
}

export {
    BadRequestsException
}