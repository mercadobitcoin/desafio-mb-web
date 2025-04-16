class UseCaseError {
  constructor(err) {
    this.code = err.code;
    this.message = err.message;
    this.error = err.error || null;
    this.status = err.status || null;
  }
}

module.exports = UseCaseError;
