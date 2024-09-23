
const ErrorCode = {
    USER_NOT_FOUND: 404,
    USER_ALREADY_EXISTS: 400,
    INCORRECT_PASSWORD: 500
};

class HttpException extends Error {
    constructor(message, errorCode, statusCode, errors) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

export {
    HttpException,
    ErrorCode
};


