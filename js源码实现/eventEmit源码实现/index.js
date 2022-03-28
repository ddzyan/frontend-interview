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

  once() {}
}

module.exports = EventEmitterDemo;
