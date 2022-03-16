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
  // 返回一个 promise
  then(onFulFilled, onRejected) {
    const self = this;
    return new PromiseDemo((resolve, reject) => {
      if (self.status === PENDING) {
        self.onFulFilledCallbackList.push(() => {
          process.nextTick(() => {
            const result = onFulFilled(self.value);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          });
        });
        self.onRejectedCallbackList.push(() => {
          process.nextTick(() => {
            const result = onRejected(self.value);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          });
        });
      } else if (self.status === FULFILLED) {
        self.onFulFilledCallbackList.push(() => {
          process.nextTick(() => {
            const result = onFulFilled(self.value);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          });
        });
      } else if (self.status === REJECTED) {
        self.onRejectedCallbackList.push(() => {
          process.nextTick(() => {
            const result = onRejected(self.value);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          });
        });
      }
    });
  }

  catch(onRejected) {
    process.nextTick(() => {
      if (this.status === PENDING) {
        this.onRejectedCallbackList.push(onRejected);
      } else if (this.status === REJECTED) {
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
