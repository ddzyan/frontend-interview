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

  const postTraversal = node => {
    if (!node) return;

    postTraversal(node.left);
    postTraversal(node.right);
    res.push(node.val);
  };

  postTraversal(root);
  return res;
};

module.exports = {
  postorderTraversalOne
};
