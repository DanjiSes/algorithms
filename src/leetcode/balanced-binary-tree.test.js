
const { isBalanced, TreeNode } = require("./balanced-binary-tree");

test.each([
  [
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    true,
  ],
  [
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3)
      ),
      new TreeNode(2)
    ),
    false,
  ],
  [new TreeNode(), true],
  [
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4))),
      new TreeNode(2, undefined, new TreeNode(3, undefined, new TreeNode(4)))
    ),
    false
  ],
])("%j -> %s", (root, expected) => {
  expect(isBalanced(root)).toBe(expected);
});
