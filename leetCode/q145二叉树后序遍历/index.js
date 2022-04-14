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

var postorderTraversalTwo = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];

  while (stack.length) {
    const cur = stack.pop();
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
    res.push(cur.val);
  }

  return res;
};

module.exports = {
  postorderTraversalOne,
  postorderTraversalTwo
};
