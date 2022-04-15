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
var inorderTraversal = function(root) {
  // 左根右
  if (!root) return [];
  const res = [];
  const inOrder = node => {
    if (!node) return;
    inOrder(node.left);
    res.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);
  return res;
};

module.exports = inorderTraversal;
