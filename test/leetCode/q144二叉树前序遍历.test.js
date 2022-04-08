const assert = require("assert");

const BinaryTree = require("../../基础数据结构/binaryTree");
const preorderTraversal = require("../../leetCode/q144二叉树前序遍历");

describe("q144二叉树前序遍历", () => {
  // 输入：root = [1,null,2,3]
  // 输出：[1,2,3]
  it("[1,null,2,3] test", () => {
    const tree = new BinaryTree(
      1,
      undefined,
      new BinaryTree(2, new BinaryTree(3))
    );
    const res = preorderTraversal(tree);
    assert.strictEqual("1,2,3", res.toString(), "返回结果错误");
  });

  it("[1,4,3,2] test", () => {
    const tree = new BinaryTree(
      1,
      new BinaryTree(4, new BinaryTree(2)),
      new BinaryTree(3)
    );
    const res = preorderTraversal(tree);
    assert.strictEqual("1,4,2,3", res.toString(), "返回结果错误");
  });

  it("[1,4,5,2,3,6,7] test", () => {
    const tree = new BinaryTree(
      1,
      new BinaryTree(4, new BinaryTree(2), new BinaryTree(3)),
      new BinaryTree(5, new BinaryTree(6), new BinaryTree(7))
    );
    const res = preorderTraversal(tree);
    assert.strictEqual("1,4,2,3,5,6,7", res.toString(), "返回结果错误");
  });
});
