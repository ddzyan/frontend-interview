const PENDING = "PENDING"; // 进行中
const FULFILLED = "FULFILLED"; // 已成功
const REJECTED = "REJECTED"; // 已失败

class PromiseDemo {
  constructor(execution) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulFilledCallbackList = [];
    this.onRejectedCallbackList = [];

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulFilledCallbackList.forEach(func => func(this.value));
      }
    };

    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbackList.forEach(func => func(this.reason));
      }
    };

    try {
      execution(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulFilled, onRejected) {
    process.nextTick(() => {
      if (this.status === PENDING) {
        this.onFulFilledCallbackList.push(onFulFilled);
        this.onRejectedCallbackList.push(onRejected);
      } else if (this.status === FULFILLED) {
        onFulFilled(this.value);
      } else if (this.status === REJECTED) {
        onRejected(this.reason);
      }
    });
  }

  catch(onRejected) {
    process.nextTick(() => {
      if (this.status === PENDING) {
        this.onRejectedCallbackList.push(onRejected);
      }
      if (this.status === REJECTED) {
        onRejected(this.reason);
      }
    });
  }

  static all() {}

  static resolve() {}

  static reject() {}

  static race() {}
}

module.exports = PromiseDemo;
