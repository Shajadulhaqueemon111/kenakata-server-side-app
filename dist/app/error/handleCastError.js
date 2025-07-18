"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//zodError Handeller
const handlerCastError = (err) => {
    const errrorSources = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Invalid ID',
        errrorSources,
    };
};
exports.default = handlerCastError;
