const assert = require("assert");

const {
  mergeTwoLists,
  ListNode
} = require("../../leetCode/q21合并两个有序链表");

describe("q21合并两个有序链表", () => {
  // 输入：l1 = [1,2,4], l2 = [1,3,4]
  // 输出：[1,1,2,3,4,4]
  it("success test", () => {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

    const successValueList = [1, 1, 2, 3, 4, 4];
    const l3 = mergeTwoLists(l1, l2);

    let p = l3;
    let index = 0;
    while (p !== null) {
      assert.strictEqual(p.val, successValueList[index], "结果错误");
      p = p.next;
      index++;
    }
  });
});
