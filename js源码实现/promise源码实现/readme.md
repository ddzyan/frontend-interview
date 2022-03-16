# 前言
Promise 是 node.js 在优化开发者在异步编程问题的一个阶段性方案，在这个方案出现之前还有 callback，sub/pub，generator 等，而 Promise + async await 语法糖的结合显得更加优秀，为了正确的使用 Promise，了解它的设计规范和源码实现就显得尤为重要，站在巨人的肩膀上看代码，了解设计的巧妙。

关于 Promise 的设计规范，可以参考 [[译]Promise/A+ 规范](https://zhuanlan.zhihu.com/p/143204897)，通读文章内容，我简要概括以下几点内容：
- Promise 有三个状态，状态变化后不可逆
  1. pending
  2. fulfilled
  3. rejected
- 必须提供一个 then 方法来访问最终的值或者报错原因
  1. 接收两个参数 onFulFilled，onRejected，都是可选的，如果不是函数，则被忽略
  2. onFulFilled 是一个函数，则 promise 的返回值将作为第一个参数传入，它一定不会在 fulfilled 状态前触发，它一定不会被触发多次
  3. onRejected 是一个函数，则 promise 报错原因将作为第一个参数传入，它一定不会在 rejected 状态前触发，它一定不会被触发多次
  4. 在代码执行之前，两个函数都不会被触发
  5. onFulfilled和onRejected一定被作为函数调用(没有this值)
  6. then必须返回一个promise
  7. 同一个promise上的then可能被调用多次

了解 Promise 的设计规范后，我们还需要再了解 Promise 的使用方法，其中包含一些静态方法
- all 传入参数为一个 Promise 数组，当所有 promise 的状态都为 fulfilled 或者 rejected 的时候返回一个包含所有结果的数组
- race 传入参数为一个 Promise 数组，当任意一个 promise 返回结果或者异常报错的时候则停止继续执行，返回执行结果或者异常报错

```js
new Promise((resolve,reject) => {
  // 成功则执行 resolve
  // 失败则执行 reject
}).then(res => {
  // resolve 对于触发执行
}, err => {
  // reject 对应触发执行
}).catch(err => {
  // 异常在这里触发
})

Promise.resolve();
Promise.reject();
Promise.all([promise1, promise2, ...]).then();
Promise.race([promise1, promise2, ...]).then();
```

通过以上分析，我们可以简要的得出下面基础结构

```js
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class PromiseDemo {
  constructor(execution){
    this.status = PENDING

    thi.resolve = (value) => {
      this.value = value;
      this.status = FULFILLED;
    };

    this.reject = (reason) => {
      this.reason = reason;
      this.status = REJECTED;
    };
    
    try {
       execution(this.resolve,this.reject);
    } catch (err){
      this.reject(err);
    }
  }

  then(onFulFiled,onRejected) {
    if(this.status === FULFILLED){
      if(typeof onFulFiled ==='function') {
        onFulFiled(this.value);
      }
    } else if(this.status ===REJECTED) {
      if(typeof onRejected ==='function') {
        onRejected(this.reason);
      }
    }
  }

  catch(onRejected) {
    if(this.status ===REJECTED) {
      if(typeof onRejected ==='function') {
        onRejected(this.reason);
      }
    }
  }

  static all() {}

  static resolve() {}

  static reject() {}

  static race()  {}
}

```