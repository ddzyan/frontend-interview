const assert = require("assert");

const BinaryTree = require("../../基础数据结构/binaryTree");
const inorderTraversal = require("../../leetCode/q94二叉树中序遍历");

describe("q94二叉树中序遍历", () => {
  // 输入：root = [1,null,2,3]
  // 输出：[1，3，2]
  it("inorderTraversal [1,null,2,3] test", () => {
    const tree = new BinaryTree(
      1,
      undefined,
      new BinaryTree(2, new BinaryTree(3))
    );
    const res = inorderTraversal(tree);
    assert.strictEqual("1,3,2", res.toString(), "返回结果错误");
  });
});
