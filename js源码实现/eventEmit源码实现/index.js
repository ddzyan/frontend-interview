class EventEmitterDemo {
  constructor() {
    this.maxListener = 10;
    this.eventCallback = {};
  }

  on(eventName, callback) {
    if (!this.eventCallback[eventName]) {
    }
  }

  emit() {}

  once() {}

  setMaxListeners() {}
}
