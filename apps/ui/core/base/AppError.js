import Result from "./Result.js";  // Corrigido
import { ErrorCodeEnum } from "../enums/ErrorCodeEnum.js";

class UnexpectedError extends Result {
  constructor(err) {
    super(false, {
      code: ErrorCodeEnum.UnexpectedError,
      message: "generic_error",
      error: err
    });
    console.log("[AppError]: An unexpected error occurred");
    console.log(err);
  }

  static create(err) {
    return new UnexpectedError(err);
  }
}

class Unauthorized extends Result {
  constructor(err) {
    super(false, {
      code: ErrorCodeEnum.AccessDenied,
      message: "generic_error",
      error: err
    });
    console.log("[AppError]: An unexpected error occurred");
    console.log(err);
  }

  static create(err) {
    return new Unauthorized(err);
  }
}

class TimeoutError extends Result {
  constructor(err) {
    super(false, {
      code: ErrorCodeEnum.Timeout,
      message: "timeout",
      error: err
    });
    console.log("[AppError]: A timeout error occurred");
    console.error(err);
  }

  static create(err) {
    return new TimeoutError(err);
  }
}


class DataNotFound extends Result {
  constructor(err) {
    super(false, {
      code: ErrorCodeEnum.NotFound,
      message: "Data Not Found",
      error: err,
      status: 404
    });
  }

  static create(err) {
    return new DataNotFound(err);
  }
}

class BadRequest extends Result {
  constructor(err) {
    super(false, {
      code: ErrorCodeEnum.BadRequest,
      message: "Bad Request",
      error: err
    });
  }

  static create(err) {
    return new BadRequest(err);
  }
}

export default {
  UnexpectedError,
  Unauthorized,
  TimeoutError,
  DataNotFound,
  BadRequest
};
