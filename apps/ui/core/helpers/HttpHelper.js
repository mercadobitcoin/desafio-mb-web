export class HttpHelper {
  static isNotFoundError(err) {
    if (
      err.code === '404' ||
      (err.message && (
        err.message.includes('404') ||
        err.message.includes('Not found')
      ))
    ) {
      return true;
    }

    return false;
  }

  static isUnauthorizedError(err) {
    if (
      err.code === '401' ||
      (err.message && (
        err.message.includes('401') ||
        err.message.includes('Unauthorized')
      ))
    ) {
      return true;
    }

    return false;
  }

  static isBadRequestError(err) {
    if (
      err.code === '400' ||
      (err.message && (
        err.message.includes('400') ||
        err.message.includes('Bad Request')
      ))
    ) {
      return true;
    }

    return false;
  }
}
