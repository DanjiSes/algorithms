const { TreeNode, isSameTree } = require("./same-tree");

test.each([
  [
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    true,
  ],
  [
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, undefined, new TreeNode(2)),
    false,
  ],
  [
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2)),
    false
  ]
])('%j, %j -> %s', (root1, root2, expected) => {
    expect(isSameTree(root1, root2)).toBe(expected)
});
