class BinaryTree {
  constructor(val, leftNode, rightNode) {
    this.val = val === undefined ? 0 : val;
    this.left = leftNode === undefined ? null : leftNode;
    this.right = rightNode === undefined ? null : rightNode;
  }
}

module.exports = BinaryTree;
