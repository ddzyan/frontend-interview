const assert = require("assert");
const mpSort = require("../../leetCode/q912排序数组/冒泡");

describe("q912排序数组", () => {
  it("冒泡排序 test", () => {
    const res = mpSort([1, 3, 4, 2, 6, 9]);
    assert.strictEqual(res.toString(), "1,2,3,4,6,9", "返回结果错误");
  });
});
