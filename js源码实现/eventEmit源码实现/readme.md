# 分析
EventEmit 源码实现在前端和Node.js面试中是一个经常问到的问题，这里以分析，实现为整体步骤，来进行解答

首先我们要了解EventEmit的一些用法
```js
const EventEmitter = require("events");

const appleMusic = new EventEmitter();
appleMusic.setMaxListeners(2);

appleMusic.on("stop", res => {
  console.log("stop 111", res);
});

appleMusic.on("stop", res => {
  console.log("stop 222", res);
});

appleMusic.on("stop", res => {
  console.log("stop 333", res);
});

appleMusic.once("play", res => {
  console.log("play 111", res);
});
```
分析
- .once() 可以注册最多可调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。
- 当使用 on() 注册监听器时，监听器会在每次触发命名事件时被调用。
- 当某个事件添加的回调超过了 setMaxListeners 设置的值（默认为10），则会触发报警，防止内存溢出

按照使用方法和分析的结果，先整体写个结构
```js
class EventEmitterDemo {
  constructor() {}

  on() {}

  emit() {}

  once() {}

  setMaxListeners() {}
}

```