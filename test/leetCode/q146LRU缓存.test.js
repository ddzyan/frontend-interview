const assert = require("assert");

const LRUCache = require("../../leetCode/q146LRU缓存");

describe("q146LRU缓存", () => {
  it("success test", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1); // 缓存是 {1=1}
    cache.put(2, 2); // 缓存是 {1=1, 2=2}
    cache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}

    assert(cache.get(2), -1, "返回结果错误");

    cache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}

    assert(cache.get(1), -1, "返回结果错误");
    assert(cache.get(3), 3, "返回结果错误");
    assert(cache.get(4), 4, "返回结果错误");
  });
});
