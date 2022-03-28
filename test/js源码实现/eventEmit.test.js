const assert = require("assert");

const EventEmitterDemo = require("../../js源码实现/eventEmit源码实现");

describe("EventEmitter 源码实现", () => {
  it("事件监听和触发", done => {
    const player = new EventEmitterDemo();
    player.on("start", name => {
      console.log("start 1", name);
      assert.strictEqual(name, "hello word", "参数错误");
    });

    player.on("start", name => {
      console.log("start 2", name);
      assert.strictEqual(name, "hello word", "参数错误");
      done();
    });

    player.emit("start", "hello word");
  });
});
