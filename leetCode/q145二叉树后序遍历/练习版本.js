/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversalOne = function(root) {
  if (!root) {
    return [];
  }

  const res = [];

  const postOrder = node => {
    if (!node) return;
    postOrder(node.left);
    postOrder(node.right);
    res.push(node.val);
  };

  postOrder(root);

  return res;
};

// 循环实现
var postorderTraversalTwo = function(root) {};

module.exports = {
  postorderTraversalOne,
  postorderTraversalTwo
};
