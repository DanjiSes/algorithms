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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const results = [];

  function dfs(node, path, sum) {
    if (!node) return;

    path.push(node.val)

    if (!node.left && !node.right && sum === node.val) {
      results.push([...path]);
      path.pop()
      return
    }

    dfs(node.left, path, sum - node.val);
    dfs(node.right, path, sum - node.val);

    path.pop()
  }

  dfs(root, [], targetSum);

  return results;
};

module.exports = { TreeNode, pathSum };
