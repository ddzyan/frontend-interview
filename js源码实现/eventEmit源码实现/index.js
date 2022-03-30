class EventEmitterDemo {
  constructor() {
    this._events = {};
  }

  // 注册事件
  on(eventName, callback) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(callback);
  }

  // 触发事件
  emit(eventName, ...arg) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(callback => callback(...arg));
    }
  }
  // 为名为 eventName 的事件添加一次性侦听器函数。下次触发 eventName 时，将删除此侦听器，然后调用它。
  once(eventName, callback) {}
}

module.exports = EventEmitterDemo;
