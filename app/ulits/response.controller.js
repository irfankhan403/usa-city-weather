
module.exports = class ResponseController {

    constructor(statusCode, responseMessage, responseObject = {}) {
        this.statusCode = statusCode;
        this.responseMessage = responseMessage;
        this.responseObject = responseObject;
    }
}