const { TreeNode, isSymmetric } = require("./symmetric-tree");

test.each([
  [
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    ),
    true,
  ],
  [
    new TreeNode(
      1,
      new TreeNode(2, undefined, new TreeNode(3)),
      new TreeNode(2, undefined, new TreeNode(3))
    ),
    false,
  ],
])("%j -> %s", (root, expected) => {
  expect(isSymmetric(root)).toBe(expected);
});
