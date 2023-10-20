const { TreeNode, pathSum } = require("./path-sum-ii");

test.each([
  [
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(
        8,
        new TreeNode(13),
        new TreeNode(4, new TreeNode(5), new TreeNode(1))
      )
    ),
    22,
    [
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ],
  ],
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), 5, []],
  [new TreeNode(1, new TreeNode(2)), 0, []]
])('%j, %s -> %j', (root, sum, expected) => {
    expect(pathSum(root, sum)).toStrictEqual(expected)
});
