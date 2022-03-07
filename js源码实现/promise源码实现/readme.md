# 简介

在前端和Node.js 面试中，promise 源码实现是一个常见的问题，死记硬背的记下实现方式可能下次就忘记了，本次通过整体分析来了解Promise实现的步骤

首先我们需要了解Promise的一些用法
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

- Promise 构造函数中传入了一个执行函数作为传参，这个执行函数在构造函数中执行，并且传入 resolve 和 reject
- 当 resolve 执行时需要触发 then ，reject 执行时需要触发 catch 
- Promise 包含 resolve，reject，all，race 静态方法
- 异步状态包含了三个：pending，fulFilled，rejected ，并且是不可逆的

通过以上分析，得出下面基础结构

```js
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class PromiseDemo {
  constructor(execution){
    this.status = PENDING

    thi.resolve = (res) => {};

    this.reject = (res) => {};

    execution(this.resolve,this.reject())
  }

  then() {}

  catch() {}

  static all() {}

  static resolve() {}

  static reject() {}

  static race()  {}
}

```