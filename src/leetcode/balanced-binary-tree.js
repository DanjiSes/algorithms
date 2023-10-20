/**
 * Definition for a binary tree node.
 * @param {number} val
 * @param {TreeNode | undefined} left
 * @param {TreeNode | undefined} right
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true

  const leftDepth = treeDepth(root.left);
  const rightDepth = treeDepth(root.right);

  return Math.abs(leftDepth - rightDepth) <= 1
};

/**
 * @param {TreeNode | null} root 
 */
function treeDepth(root) {
  if (!root) return 0

  const leftDepth = treeDepth(root.left)
  const rightDepth = treeDepth(root.right)

  if (Math.abs(leftDepth - rightDepth) > 1) return Infinity

  return Math.max(leftDepth, rightDepth) + 1
}

module.exports = { isBalanced, TreeNode };
