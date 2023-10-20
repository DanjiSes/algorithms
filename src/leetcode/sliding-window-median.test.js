const medianSlidingWindow = require("./sliding-window-median");

test.each([
  [[1, 3, -1, -3, 5, 3, 6, 7], 3, [1.0, -1.0, -1.0, 3.0, 5.0, 6.0]],
  [[1, 2, 3, 4, 2, 3, 1, 4, 2], 3, [2.0, 3.0, 3.0, 3.0, 2.0, 3.0, 2.0]],
  [[1, 2, 3, 4, 5, 6, 7, 8], 4, [2.5, 3.5, 4.5, 5.5, 6.5]],
])("%j, %s -> %j", (nums, k, expected) => {
  expect(medianSlidingWindow(nums, k)).toStrictEqual(expected);
});
