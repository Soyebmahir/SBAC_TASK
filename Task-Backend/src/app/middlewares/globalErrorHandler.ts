/* eslint-disable no-undef */
import { ErrorRequestHandler, } from "express";

import { ZodError } from "zod";
import { handleZodError } from "../Errors/handleZodError";
import { handleCastError } from "../Errors/handleCastError";
import { handleDuplicateError } from "../Errors/handleDuplicateError";
import { handleMongooseError } from "../Errors/handleMongooseError";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {


    let statusCode = err.statusCode || 500;
    let message = err.message || `Something Went Wrong !`;
    let errorMessage;
    let errorDetails;

    //error checkup
    if (err instanceof ZodError) {
        const modifiedError = handleZodError(err)
        statusCode = modifiedError?.statusCode;
        message = modifiedError?.message;
        errorMessage = modifiedError.errorMessage;
        errorDetails = modifiedError.errorDetails


    } else if (err.name === 'CastError') {
        const modifiedError = handleCastError(err)
        statusCode = modifiedError?.statusCode;
        message = modifiedError?.message;
        errorMessage = modifiedError.errorMessage;
        errorDetails = modifiedError.errorDetails


    } else if (err.code === 11000) {
        const modifiedError = handleDuplicateError(err)
        statusCode = modifiedError?.statusCode;
        message = modifiedError?.message;
        errorMessage = modifiedError.errorMessage;
        errorDetails = modifiedError.errorDetails

    } else if (err.name === 'ValidationError') {
        const modifiedError = handleMongooseError(err)
        statusCode = modifiedError?.statusCode;
        message = modifiedError?.message;
        errorMessage = modifiedError.errorMessage;
        errorDetails = modifiedError.errorDetails


    } else if (err?.statusCode == 401) {
        err.stack = null;
        errorDetails = null;
        errorMessage = "You do not have the necessary permissions to access this resource."
    } else {
        statusCode = 500;
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorMessage,

        errorDetails,
        err,
        stack: config.NODE_ENV === 'development' ? err?.stack : null,

    });
};
export default globalErrorHandler;