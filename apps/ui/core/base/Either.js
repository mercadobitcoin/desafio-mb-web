class Left {
  constructor(value) {
    this.value = value;
  }

  isLeft() {
    return true;
  }

  isRight() {
    return false;
  }
}

class Right {
  constructor(value) {
    this.value = value;
  }

  isLeft() {
    return false;
  }

  isRight() {
    return true;
  }
}

export const left = (value) => new Left(value);
export const right = (value) => new Right(value);

export { Left, Right };
