// import HTTP_STATUS from "../constants/http.status.codes.js";

// class ApiError extends Error {
//   public statusCode: number | null;
//   public isOperational: boolean;

//   constructor(statusCode: number | null, message: string) {
//     super(message);
//     this.statusCode = statusCode;
//     this.isOperational = true;

//     // Maintains proper stack trace for where our error was thrown (only available on V8)
//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }

//   static badRequest(message: string = "Bad Request"): ApiError {
//     return new ApiError(HTTP_STATUS.BAD_REQUEST, message);
//   }

//   static conflict(message: string = "Conflict"): ApiError {
//     return new ApiError(HTTP_STATUS.CONFLICT, message);
//   }

//   static unauthorize(message: string = "Unauthorized"): ApiError {
//     return new ApiError(HTTP_STATUS.UNAUTHORIZED, message);
//   }

//   static forbidden(message: string = "Forbidden"): ApiError {
//     return new ApiError(HTTP_STATUS.FORBIDDEN, message);
//   }

//   static notFound(message: string = "Not Found"): ApiError {
//     return new ApiError(HTTP_STATUS.NOT_FOUND, message);
//   }

//   static serviceUnavailable(message: string = "Service Unavailable"): ApiError {
//     return new ApiError(HTTP_STATUS.SERVICE_UNAVAILABLE, message);
//   }
// }

// export default ApiError;

import HTTP_STATUS from "../constants/http.status.codes.js";

class ApiError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors?: any;

  constructor(statusCode: number, message: string, errors?: any) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = true;
    this.errors = errors;

    Error.captureStackTrace?.(this, this.constructor);
  }

  // =========================
  // BAD REQUEST FIXED
  // =========================
  static badRequest(message = "Bad Request", errors?: any) {
    return new ApiError(HTTP_STATUS.BAD_REQUEST, message, errors);
  }

  static conflict(message = "Conflict", errors?: any) {
    return new ApiError(HTTP_STATUS.CONFLICT, message, errors);
  }

  static unauthorize(message = "Unauthorized") {
    return new ApiError(HTTP_STATUS.UNAUTHORIZED, message);
  }

  static forbidden(message = "Forbidden") {
    return new ApiError(HTTP_STATUS.FORBIDDEN, message);
  }

  static notFound(message = "Not Found") {
    return new ApiError(HTTP_STATUS.NOT_FOUND, message);
  }

  static serviceUnavailable(message = "Service Unavailable") {
    return new ApiError(HTTP_STATUS.SERVICE_UNAVAILABLE, message);
  }

  static internal(message = "Internal Server Error") {
    return new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, message);
  }
}

export default ApiError;
