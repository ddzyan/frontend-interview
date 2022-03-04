const assert = require("assert");

const PromiseDemo = require("../../js源码实现/promise源码实现");

describe("promise 源码实现", () => {
  it("promise.then", done => {
    const promiseDemo = new PromiseDemo((resolve, reject) => {
      setTimeout(() => {
        resolve("hello word");
      }, 1 * 1000);
    });

    promiseDemo.then(res => {
      assert.strictEqual(res, "hello word", "返回值错误");
      done();
    });
  });

  it("promise.catch", done => {
    const promiseDemo = new PromiseDemo((resolve, reject) => {
      setTimeout(() => {
        reject("error error");
      }, 1 * 1000);
    });

    promiseDemo.catch(res => {
      console.error(res);
      assert.strictEqual(res, "error error", "返回值错误");
      done();
    });
  });
});
