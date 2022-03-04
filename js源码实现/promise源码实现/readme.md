# 简介

整体分析
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

- Promise 构造函数中传入了一个执行函数组我诶传参，这个执行函数在构造函数中执行，并且传入 resolve 和 reject
- 当 resolve 执行时需要触发 then ，reject 执行时需要触发 catch 
- Promise 包含 resolve，reject，all，race 静态方法

通过以上分析，得出下面基础结构

```js
class PromiseDemo {
  constructor(execution){
    thi.resolve = (res) => {
      this.callThenFunc(res)
    };

    this.reject = () => {};

    this.callThenFunc = null;

    execution(this.resolve,this.reject())
  }

  then(func) {
    this.callThenFunc = func;
  }

  catch(func) {}

  static all() {}

  static resolve() {}

  static reject() {}

  static race()  {}
}

```