const assert = require("assert");

const BinaryTree = require("../../基础数据结构/binaryTree");
const {
  postorderTraversalOne,
  postorderTraversalTwo
} = require("../../leetCode/q145二叉树后序遍历");

describe("q145二叉树后序遍历", () => {
  // 输入：root = [1,null,2,3]
  // 输出：[3,2,1]
  it("postorderTraversalOne [1,null,2,3] test", () => {
    const tree = new BinaryTree(
      1,
      undefined,
      new BinaryTree(2, new BinaryTree(3))
    );
    const res = postorderTraversalOne(tree);
    assert.strictEqual("3,2,1", res.toString(), "返回结果错误");
  });

  it("postorderTraversalTwo [1,null,2,3] test", () => {
    const tree = new BinaryTree(
      1,
      undefined,
      new BinaryTree(2, new BinaryTree(3))
    );
    const res = postorderTraversalTwo(tree);
    assert.strictEqual("3,2,1", res.toString(), "返回结果错误");
  });
});
